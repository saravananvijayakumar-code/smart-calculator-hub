import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleCors, json, error } from "../_lib/helpers.js";
import { getExchangeRate } from "../_lib/exchange-rates.js";

// Handles: GET /api/exchange/rate?from=USD&to=EUR
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;

  const { from, to } = req.query;

  if (!from || !to) {
    return error(res, "Missing required query parameters: from, to");
  }

  const fromCurrency = (from as string).toUpperCase();
  const toCurrency = (to as string).toUpperCase();

  try {
    const rate = await getExchangeRate(fromCurrency, toCurrency);

    json(res, {
      rate: {
        from: fromCurrency,
        to: toCurrency,
        rate,
        lastUpdated: new Date(),
      },
    });
  } catch (err) {
    error(res, "Unable to fetch exchange rate at this time", 500);
  }
}
