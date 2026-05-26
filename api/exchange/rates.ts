import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleCors, json, error } from "../_lib/helpers.js";
import { getAllRates } from "../_lib/exchange-rates.js";

// Handles: GET /api/exchange/rates?base=USD&currencies=EUR,GBP
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;

  const { base, currencies } = req.query;

  if (!base) {
    return error(res, "Missing required query parameter: base");
  }

  const baseCurrency = (base as string).toUpperCase();

  try {
    let rates = await getAllRates(baseCurrency);

    // Filter to specific currencies if requested
    if (currencies) {
      const currencyList = Array.isArray(currencies) ? currencies : (currencies as string).split(",");
      const filtered: Record<string, number> = {};
      currencyList.forEach((c) => {
        const upper = c.toUpperCase();
        if (rates[upper] !== undefined) {
          filtered[upper] = rates[upper];
        }
      });
      rates = filtered;
    }

    json(res, {
      base: baseCurrency,
      rates,
      lastUpdated: new Date(),
    });
  } catch (err) {
    error(res, "Unable to fetch exchange rates at this time", 500);
  }
}
