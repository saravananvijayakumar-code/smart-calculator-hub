import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleCors, json } from "./_lib/helpers.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;

  json(res, {
    status: "ok",
    timestamp: new Date().toISOString(),
  });
}
