import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleCors, json, error, methodNotAllowed } from "../_lib/helpers.js";
import { calcPAYGWithholding, convertPeriodToAnnual } from "./engine.js";
import type { BonusWithholdingRequest } from "./types.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;
  if (req.method !== "POST") return methodNotAllowed(res, ["POST"]);

  const body: BonusWithholdingRequest = req.body;
  if (!body || !body.year || !body.bonusAmount) {
    return error(res, "Missing required fields");
  }

  try {
    const { year, regularGross, payPeriod, bonusAmount, residency, claimTaxFreeThreshold, hasHelp, method = "B" } = body;

    if (residency !== "resident") {
      const rate = residency === "whm" ? 0.15 : 0.30;
      const withholdingAmount = bonusAmount * rate;
      return json(res, { bonusAmount, withholdingAmount, netBonus: bonusAmount - withholdingAmount, withholdingRate: rate * 100, method: "A" as const, explanation: `Non-resident flat rate of ${rate * 100}% per ATO Schedule 5.` });
    }

    let withholdingAmount: number;
    let explanation: string;

    if (method === "A") {
      withholdingAmount = bonusAmount * 0.47;
      explanation = "Method A: top marginal rate (47%) per ATO Schedule 5.";
    } else {
      const annualRegular = convertPeriodToAnnual(regularGross, payPeriod);
      const totalWithholding = calcPAYGWithholding(year, (annualRegular + bonusAmount) / 52, "weekly", claimTaxFreeThreshold, hasHelp) * 52;
      const regularWithholding = calcPAYGWithholding(year, annualRegular / 52, "weekly", claimTaxFreeThreshold, hasHelp) * 52;
      withholdingAmount = Math.max(0, totalWithholding - regularWithholding);
      explanation = "Method B: annualised calculation per ATO Schedule 5.";
    }

    json(res, { bonusAmount, withholdingAmount: Math.round(withholdingAmount), netBonus: bonusAmount - Math.round(withholdingAmount), withholdingRate: (withholdingAmount / bonusAmount) * 100, method, explanation });
  } catch (err: any) {
    error(res, err.message || "Calculation failed", 400);
  }
}
