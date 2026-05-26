import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleCors, json, error } from "../_lib/helpers.js";
import { getExchangeRate } from "../_lib/exchange-rates.js";

// Handles: GET /api/exchange/convert?from=USD&to=EUR&amount=100
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;

  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    return error(res, "Missing required query parameters: from, to, amount");
  }

  const fromCurrency = (from as string).toUpperCase();
  const toCurrency = (to as string).toUpperCase();
  const numAmount = parseFloat(amount as string);

  if (isNaN(numAmount) || numAmount <= 0) {
    return error(res, "Amount must be a positive number");
  }

  try {
    const rate = await getExchangeRate(fromCurrency, toCurrency);
    const convertedAmount = numAmount * rate;

    json(res, {
      from: fromCurrency,
      to: toCurrency,
      amount: numAmount,
      convertedAmount,
      rate,
      lastUpdated: new Date(),
    });
  } catch (err) {
    error(res, "Unable to convert currency at this time", 500);
  }
}
