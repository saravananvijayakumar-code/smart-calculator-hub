/**
 * Frontend-compatible API client that works in the browser.
 * This is a simplified version of the Encore-generated client
 * that doesn't depend on Node.js modules.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

// Helper for making API requests
async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
}

// Exchange service
const exchange = {
  async convert(params: { from: string; to: string; amount: number }) {
    return apiRequest<{ result: number; rate: number }>('/exchange/convert', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },
  async getCurrencies() {
    return apiRequest<{ currencies: string[] }>('/exchange/currencies');
  },
  async getRate(params: { from: string; to: string }) {
    return apiRequest<{ rate: number }>('/exchange/rate', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },
  async getRates(params: { base: string }) {
    return apiRequest<{ rates: Record<string, number> }>(`/exchange/rates?base=${params.base}`);
  },
};

// Blog service
const blog = {
  async list(params?: { limit?: number; offset?: number }) {
    const query = new URLSearchParams();
    if (params?.limit) query.set('limit', String(params.limit));
    if (params?.offset) query.set('offset', String(params.offset));
    return apiRequest<{ posts: any[] }>(`/blog?${query}`);
  },
  async get(params: { slug: string }) {
    return apiRequest<any>(`/blog/${params.slug}`);
  },
};

// Health service
const health = {
  async check() {
    return apiRequest<{ status: string }>('/health');
  },
};

// AI Analysis service
const ai_analysis = {
  async analyze(params: { text: string; type: string }) {
    return apiRequest<any>('/ai/analyze', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },
};

// AI Text Detector service
const ai_text_detector = {
  async detect(params: { text: string }) {
    return apiRequest<{ isAI: boolean; confidence: number }>('/ai/detect', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },
};

// Caption Generator service
const caption_gen = {
  async generate(params: { topic: string; platform: string }) {
    return apiRequest<{ caption: string }>('/ai/caption', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },
};

// Compatibility service
const compatibility = {
  async calculate(params: { name1: string; name2: string }) {
    return apiRequest<{ score: number }>('/compatibility', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },
};

// Shortener service
const shortener = {
  async create(params: { url: string }) {
    return apiRequest<{ shortUrl: string; id: string }>('/shortener', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },
  async get(params: { id: string }) {
    return apiRequest<{ url: string }>(`/shortener/${params.id}`);
  },
};

// Vision service (for plant finder, etc.)
const vision = {
  async analyze(params: { image: string; type: string }) {
    return apiRequest<any>('/vision/analyze', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },
};

// PWA Stats service
const pwa_stats = {
  async track(params: { event: string; data?: any }) {
    return apiRequest<void>('/pwa/track', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },
};

// Auth service (placeholder)
const auth = {
  async login(params: { email: string; password: string }) {
    return apiRequest<{ token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },
};

// AU Tax service
const au_tax = {
  async calculate(params: any) {
    return apiRequest<any>('/au/tax', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },
};

// The main client object that can be used throughout the app
const backend = {
  exchange,
  blog,
  health,
  ai_analysis,
  ai_text_detector,
  caption_gen,
  compatibility,
  shortener,
  vision,
  pwa_stats,
  auth,
  au_tax,
};

export default backend;
export { 
  exchange, 
  blog, 
  health, 
  ai_analysis, 
  ai_text_detector,
  caption_gen,
  compatibility,
  shortener,
  vision,
  pwa_stats,
  auth,
  au_tax,
};
