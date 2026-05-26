import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleCors, json, error, methodNotAllowed } from "../_lib/helpers.js";
import { calcHELP } from "./engine.js";
import type { StudentLoanProjectionRequest, YearProjection } from "./types.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (handleCors(req, res)) return;
  if (req.method !== "POST") return methodNotAllowed(res, ["POST"]);

  const body: StudentLoanProjectionRequest = req.body;
  if (!body || !body.year || !body.currentBalance) {
    return error(res, "Missing required fields");
  }

  try {
    const { year, currentBalance, annualIncome, incomeGrowthRate, indexationRate, voluntaryRepayment = 0 } = body;
    const projections: YearProjection[] = [];
    let balance = currentBalance;
    let income = annualIncome;
    let yearNum = 1;
    let totalPaid = 0;
    const maxYears = 50;

    while (balance > 0 && yearNum <= maxYears) {
      const startingBalance = balance;
      const compulsoryRepayment = calcHELP(year, income);
      const totalRepayment = compulsoryRepayment + voluntaryRepayment;
      balance -= totalRepayment;
      totalPaid += totalRepayment;

      if (balance > 0) {
        const indexation = balance * indexationRate;
        balance += indexation;
        projections.push({ year: yearNum, startingBalance, compulsoryRepayment, voluntaryRepayment, indexation, endingBalance: balance, income });
      } else {
        const actual = startingBalance;
        totalPaid -= (totalRepayment - actual);
        projections.push({ year: yearNum, startingBalance, compulsoryRepayment: Math.min(compulsoryRepayment, actual), voluntaryRepayment: Math.max(0, actual - compulsoryRepayment), indexation: 0, endingBalance: 0, income });
        break;
      }
      income *= 1 + incomeGrowthRate;
      yearNum++;
    }

    json(res, { projections, payoffYear: balance <= 0 ? yearNum : null, totalPaid, totalInterest: projections.reduce((s, p) => s + p.indexation, 0) });
  } catch (err: any) {
    error(res, err.message || "Calculation failed", 400);
  }
}
