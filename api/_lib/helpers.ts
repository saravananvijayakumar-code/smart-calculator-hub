import type { VercelRequest, VercelResponse } from "@vercel/node";

// CORS headers for all API responses
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function cors(res: VercelResponse): VercelResponse {
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  return res;
}

export function handleCors(req: VercelRequest, res: VercelResponse): boolean {
  cors(res);
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return true;
  }
  return false;
}

export function json<T>(res: VercelResponse, data: T, status = 200): void {
  res.status(status).json(data);
}

export function error(res: VercelResponse, message: string, status = 400): void {
  res.status(status).json({ error: message });
}

export function methodNotAllowed(res: VercelResponse, allowed: string[]): void {
  res.setHeader("Allow", allowed.join(", "));
  res.status(405).json({ error: `Method not allowed. Use: ${allowed.join(", ")}` });
}

// Simple auth check for admin endpoints
export interface AuthData {
  userID: string;
  isAdmin: boolean;
}

export function verifyAdmin(req: VercelRequest): AuthData | null {
  const authHeader = req.headers.authorization || "";

  if (!authHeader.startsWith("Basic ")) {
    return null;
  }

  const base64Credentials = authHeader.replace("Basic ", "");
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
  const [username, password] = credentials.split(":");

  const validUsername = process.env.ADMIN_USER;
  const validPassword = process.env.ADMIN_PASS;

  if (!validUsername || !validPassword) {
    return null;
  }

  if (username === validUsername && password === validPassword) {
    return { userID: "admin", isAdmin: true };
  }

  return null;
}
