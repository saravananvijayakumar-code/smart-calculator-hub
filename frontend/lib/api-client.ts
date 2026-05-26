/**
 * API Client - replaces the auto-generated Encore client.
 * All API calls go through /api/* which Vercel routes to serverless functions.
 */

const API_BASE = import.meta.env.VITE_API_URL || "/api";

class ApiError extends Error {
  status: number;
  details?: any;

  constructor(status: number, message: string, details?: any) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: res.statusText }));
    throw new ApiError(res.status, body.error || res.statusText, body);
  }

  return res.json();
}

function post<T>(path: string, body: any, headers?: Record<string, string>): Promise<T> {
  return request<T>(path, { method: "POST", body: JSON.stringify(body), headers });
}

function get<T>(path: string): Promise<T> {
  return request<T>(path, { method: "GET" });
}

// Service clients
export const api = {
  // Health
  health: {
    status: () => get<{ status: string; timestamp: string }>("/health"),
  },

  // Auth
  auth: {
    login: (username: string, password: string) =>
      post<{ success: boolean; token?: string }>("/auth/admin/login", { username, password }),
  },

  // AI Text Detector (pure computation, no API key needed)
  ai_text_detector: {
    detect: (data: { text: string }) =>
      post<any>("/ai-text-detector/detect", data),
  },

  // Exchange
  exchange: {
    convert: (params: { _from: string; to: string; amount: number } | string, to?: string, amount?: number) => {
      if (typeof params === "object") {
        return get<any>(`/exchange/convert?from=${params._from}&to=${params.to}&amount=${params.amount}`);
      }
      return get<any>(`/exchange/convert?from=${params}&to=${to}&amount=${amount}`);
    },
    getRate: (params: { from: string; to: string } | string, to?: string) => {
      if (typeof params === "object") {
        return get<any>(`/exchange/rate?from=${params.from}&to=${params.to}`);
      }
      return get<any>(`/exchange/rate?from=${params}&to=${to}`);
    },
    getRates: (params: { base: string } | string) => {
      if (typeof params === "object") {
        return get<any>(`/exchange/rates?base=${params.base}`);
      }
      return get<any>(`/exchange/rates?base=${params}`);
    },
    getCurrencies: () =>
      get<any>("/exchange/currencies"),
  },

  // AU Tax
  au_tax: {
    calculate: (data: any) =>
      post<any>("/au/paycalc/estimate", data),
    estimate: (data: any) =>
      post<any>("/au/paycalc/estimate", data),
    bonusWithholding: (data: any) =>
      post<any>("/au/bonus/withholding", data),
    studentLoanProjection: (data: any) =>
      post<any>("/au/student-loan/projection", data),
  },
};

// Client class for backward compatibility with useBackend() pattern
export class Client {
  public readonly ai_text_detector = api.ai_text_detector;
  public readonly au_tax = api.au_tax;
  public readonly auth = api.auth;
  public readonly exchange = api.exchange;
  public readonly health = api.health;

  // Stubs for removed services — fail gracefully so pages don't crash
  public readonly ai_analysis = {
    analyze: async () => ({ summary: "", recommendations: [], keyInsights: [], riskFactors: [], nextSteps: [] }),
  };
  public readonly caption_gen = {
    generate: async () => { throw new Error("Caption generation is not available"); },
  };
  public readonly compatibility = {
    calculate: async () => { throw new Error("Compatibility calculator is not available"); },
  };
  public readonly vision = {
    analyze: async () => { throw new Error("Vision analysis is not available"); },
    getNutrition: async () => { throw new Error("Nutrition analysis is not available"); },
    analyzePlant: async () => { throw new Error("Plant analysis is not available"); },
    analyzePetBreed: async () => { throw new Error("Pet breed analysis is not available"); },
    analyzeDecorStyle: async () => { throw new Error("Decor style analysis is not available"); },
  };
  public readonly blog = { list: async () => ({ posts: [] }), get: async () => null };
  public readonly blogV2 = { list: async () => ({ blogs: [] }), get: async () => null };
  public readonly calc_history = { list: async () => ({ entries: [], total: 0 }), save: async () => ({}) };
  public readonly ai_history = { list: async () => ({ entries: [] }), save: async () => ({}) };
  public readonly pageviews = { track: async () => ({}) };
  public readonly pwa_stats = { track: async () => ({}) };
  public readonly pwa_install = { track: async () => ({}) };
  public readonly shortener = { create: async () => ({}) };
  public readonly user = { getOrCreate: async () => null };
  public readonly sources = {};
  public readonly web = {};

  public with(options: { auth?: { authorization: string } }): Client {
    return this;
  }
}

const client = new Client();
export default client;
