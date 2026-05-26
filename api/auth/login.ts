import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleCors, json, error, methodNotAllowed } from "../_lib/helpers.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;
  if (req.method !== "POST") return methodNotAllowed(res, ["POST"]);

  const { username, password } = req.body || {};

  const validUsername = process.env.ADMIN_USER;
  const validPassword = process.env.ADMIN_PASS;

  if (!validUsername || !validPassword) {
    return json(res, { success: false });
  }

  if (username === validUsername && password === validPassword) {
    const token = Buffer.from(`${validUsername}:${validPassword}`).toString("base64");
    return json(res, { success: true, token });
  }

  return json(res, { success: false });
}
