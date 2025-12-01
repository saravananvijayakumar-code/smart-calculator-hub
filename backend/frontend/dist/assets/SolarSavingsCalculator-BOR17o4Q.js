import { r as reactExports, j as jsxRuntimeExports, f as Card, C as Calculator, a4 as Label, V as Input, T as TrendingUp, l as House } from "./index-CK9G4vW7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { S as Slider } from "./slider-DWqvXvDh.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { E as EnhancedAIAnalysis } from "./EnhancedAIAnalysis-BaYCd8m5.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { A as AutoAdSlot } from "./AutoAdSlot-DNRO9HTk.js";
import { A as ADS_CONFIG } from "./ads-CX9341oB.js";
import { S as Sun } from "./sun-BQHCaptu.js";
import { Z as Zap } from "./zap-BEhI-iJb.js";
import { L as Leaf } from "./leaf-DNrGuBBj.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./badge-6THgoC_4.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
import "./share-2-SpOWc355.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
function SolarSavingsCalculator() {
  const [state, setState] = reactExports.useState("nsw");
  const [systemSize, setSystemSize] = reactExports.useState(6.6);
  const [dailyUsage, setDailyUsage] = reactExports.useState(20);
  const [electricityRate, setElectricityRate] = reactExports.useState(0.3);
  const [feedInTariff, setFeedInTariff] = reactExports.useState(0.1);
  const [roofOrientation, setRoofOrientation] = reactExports.useState("north");
  const [shading, setShading] = reactExports.useState(0);
  const [result, setResult] = reactExports.useState(null);
  const stateData = {
    nsw: { name: "New South Wales", sunHours: 4.5, rebate: 1850, installCost: 1100 },
    vic: { name: "Victoria", sunHours: 4.2, rebate: 2200, installCost: 1e3 },
    qld: { name: "Queensland", sunHours: 5.2, rebate: 1650, installCost: 950 },
    sa: { name: "South Australia", sunHours: 4.8, rebate: 1800, installCost: 1050 },
    wa: { name: "Western Australia", sunHours: 5.5, rebate: 1600, installCost: 1100 },
    tas: { name: "Tasmania", sunHours: 3.9, rebate: 1900, installCost: 1200 },
    nt: { name: "Northern Territory", sunHours: 5.8, rebate: 1500, installCost: 1300 },
    act: { name: "Australian Capital Territory", sunHours: 4.4, rebate: 2e3, installCost: 1050 }
  };
  const orientationFactors = {
    north: 1,
    northeast: 0.95,
    northwest: 0.95,
    east: 0.85,
    west: 0.85,
    southeast: 0.75,
    southwest: 0.75,
    south: 0.6
  };
  reactExports.useEffect(() => {
    calculateSavings();
  }, [state, systemSize, dailyUsage, electricityRate, feedInTariff, roofOrientation, shading]);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined" && ADS_CONFIG.AUTO_ADS.ENABLED) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);
  const calculateSavings = () => {
    const stateInfo = stateData[state];
    const orientationFactor = orientationFactors[roofOrientation];
    const shadingFactor = 1 - shading / 100;
    const effectiveSunHours = stateInfo.sunHours * orientationFactor * shadingFactor;
    const annualGeneration = systemSize * effectiveSunHours * 365;
    const selfConsumptionRate = 0.35;
    const annualSelfConsumption = annualGeneration * selfConsumptionRate;
    const annualExport = annualGeneration - annualSelfConsumption;
    const annualSavings = annualSelfConsumption * electricityRate;
    const feedInEarnings = annualExport * feedInTariff;
    const totalAnnualBenefit = annualSavings + feedInEarnings;
    const systemCost = systemSize * stateInfo.installCost;
    const afterRebates = systemCost - stateInfo.rebate;
    const paybackPeriod = afterRebates / totalAnnualBenefit;
    let savings25Years = 0;
    for (let year = 1; year <= 25; year++) {
      const degradation = Math.pow(0.995, year - 1);
      savings25Years += totalAnnualBenefit * degradation;
    }
    savings25Years -= afterRebates;
    const roi = savings25Years / afterRebates * 100;
    const co2Offset = annualGeneration * 0.82;
    const treesEquivalent = co2Offset / 21.77;
    setResult({
      systemSize,
      annualGeneration,
      annualSelfConsumption,
      annualExport,
      annualSavings,
      feedInEarnings,
      totalAnnualBenefit,
      systemCost,
      afterRebates,
      paybackPeriod,
      savings25Years,
      roi,
      co2Offset,
      treesEquivalent
    });
  };
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  const formatNumber = (value, decimals = 0) => {
    return value.toLocaleString("en-AU", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Solar Savings Calculator Australia",
      description: "Calculate your solar panel ROI, payback period, and lifetime savings for Australian homes with accurate state-based rebates and feed-in tariffs",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 text-white mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent", children: "Solar Savings Calculator Australia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Calculate your solar panel investment return, payback period, and lifetime savings with accurate Australian state rebates and feed-in tariffs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-8 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-900 dark:to-yellow-950 border-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "w-5 h-5 text-yellow-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "System Details" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "State/Territory" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: state, onValueChange: setState, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.entries(stateData).map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: key, children: value.name }, key)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "System Size: ",
                systemSize,
                " kW"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Slider,
                {
                  value: [systemSize],
                  onValueChange: (value) => setSystemSize(value[0]),
                  min: 3,
                  max: 13.2,
                  step: 0.33,
                  className: "py-4"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Typical residential systems: 6.6kW - 10kW" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Daily Electricity Usage (kWh)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: dailyUsage,
                  onChange: (e) => setDailyUsage(Number(e.target.value)),
                  min: 5,
                  max: 100,
                  step: 1
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Electricity Rate ($/kWh)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: electricityRate,
                  onChange: (e) => setElectricityRate(Number(e.target.value)),
                  min: 0.15,
                  max: 0.6,
                  step: 0.01
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Feed-in Tariff ($/kWh)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: feedInTariff,
                  onChange: (e) => setFeedInTariff(Number(e.target.value)),
                  min: 0.03,
                  max: 0.2,
                  step: 0.01
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Roof Orientation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: roofOrientation, onValueChange: setRoofOrientation, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "north", children: "North (Best)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "northeast", children: "North-East" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "northwest", children: "North-West" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "east", children: "East" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "west", children: "West" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "southeast", children: "South-East" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "southwest", children: "South-West" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "south", children: "South (Worst)" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "Shading Impact: ",
                shading,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Slider,
                {
                  value: [shading],
                  onValueChange: (value) => setShading(value[0]),
                  min: 0,
                  max: 50,
                  step: 5,
                  className: "py-4"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Your Savings" })
            ] }),
            result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium mb-2", children: "25-Year Net Savings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold mb-1", children: formatCurrency(result.savings25Years) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm opacity-90", children: [
                  result.roi.toFixed(0),
                  "% ROI over 25 years"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Annual Benefit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: formatCurrency(result.totalAnnualBenefit) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-blue-50 dark:bg-blue-950", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Payback Period" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-semibold", children: [
                    result.paybackPeriod.toFixed(1),
                    " years"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-lg bg-white dark:bg-gray-800 border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "System Cost:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: formatCurrency(result.systemCost) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "State Rebate:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-green-600", children: [
                    "-",
                    formatCurrency(result.systemCost - result.afterRebates)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Net Cost:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: formatCurrency(result.afterRebates) })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
                  "Annual Generation Breakdown"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Total Generated:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      formatNumber(result.annualGeneration, 0),
                      " kWh"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Self-Consumed:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      formatNumber(result.annualSelfConsumption, 0),
                      " kWh"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Exported to Grid:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      formatNumber(result.annualExport, 0),
                      " kWh"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-4 h-4" }),
                  "Environmental Impact"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Annual CO₂ Offset:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      formatNumber(result.co2Offset, 0),
                      " kg"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Equivalent to:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      formatNumber(result.treesEquivalent, 0),
                      " trees planted"
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ExportShareButtons,
              {
                calculatorType: "solar-savings",
                inputs: { state },
                results: result || {},
                title: "Solar Savings Analysis"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
        result && /* @__PURE__ */ jsxRuntimeExports.jsx(
          EnhancedAIAnalysis,
          {
            calculatorType: "solar-savings",
            data: {
              monthlyBill: dailyUsage * 30 * electricityRate,
              state,
              systemSize: result.systemSize,
              electricityRate,
              installationCost: result.afterRebates,
              annualSavings: result.totalAnnualBenefit,
              paybackYears: result.paybackPeriod,
              totalSavings25Years: result.savings25Years,
              co2ReductionTons: result.co2Offset / 1e3
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-8 h-8 text-yellow-600" }),
            "Complete Guide to Solar Power in Australia"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed mb-6", children: "Australia is one of the sunniest countries on Earth, making it ideal for solar power generation. With rising electricity costs and generous government incentives, solar panels have become an increasingly attractive investment for Australian homeowners. This comprehensive guide will help you understand everything you need to know about going solar in Australia." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Why Solar Power Makes Sense in Australia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Australia's abundant sunshine provides exceptional conditions for solar power generation. Most Australian capital cities receive between 4 and 6 peak sun hours per day on average, with some regions receiving even more. This means a typical 6.6kW solar system can generate 24-30 kWh of electricity per day, enough to power an average Australian home and often with excess to export to the grid." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The economic case for solar has never been stronger. Electricity prices in Australia have increased by over 120% in the last decade, with no signs of slowing down. Meanwhile, the cost of solar panels has dropped by approximately 80% since 2010, making the payback period for solar systems shorter than ever before. Most residential solar systems in Australia now pay for themselves in 3-6 years." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Beyond the financial benefits, solar power provides energy independence and protection against future electricity price increases. Once your system is paid off, you're essentially generating free electricity for the remaining 15-20+ years of the panels' lifespan. This can result in tens of thousands of dollars in savings over the system's lifetime." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "not-prose my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "mx-auto" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Understanding System Sizes and Generation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Solar systems in Australia are typically sized in kilowatts (kW), referring to the system's maximum power output under ideal conditions. The most common residential system sizes are 6.6kW, 8kW, 10kW, and 13.2kW. Choosing the right size depends on your electricity consumption, available roof space, and budget." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "A 6.6kW system has become the most popular choice for Australian homes. This size is perfectly matched to the maximum size inverter (5kW) allowed for single-phase connections under most feed-in tariff schemes. A 6.6kW system typically consists of 15-20 solar panels (depending on panel wattage) and requires approximately 35-40 square meters of roof space." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "To estimate how much electricity your system will generate, you need to consider your location's peak sun hours. Queensland and Western Australia typically receive 5-5.5+ peak sun hours, while Tasmania receives around 3.9. The orientation and tilt of your roof also significantly impact generation, with north-facing roofs being optimal in Australia." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Your solar panels won't always operate at their rated capacity. Panel efficiency is affected by temperature (they actually produce slightly less in extreme heat), shading from trees or buildings, and natural degradation over time. Quality panels degrade at approximately 0.5% per year, meaning they'll still produce around 87-90% of their original capacity after 25 years." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "State-by-State Rebates and Incentives" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The Australian Government offers the Small-scale Renewable Energy Scheme (SRES), which provides Small-scale Technology Certificates (STCs) to eligible solar installations. These certificates can be traded and essentially function as an upfront discount on your system cost. The number of STCs you receive depends on your system size and location, with the rebate typically worth $1,500-$2,500 for a 6.6kW system." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "In addition to federal incentives, several states offer their own rebate programs. Victoria provides the Solar Homes Program, offering rebates of up to $1,400 plus interest-free loans for eligible households. South Australia offers subsidies and battery incentives through their Home Battery Scheme. New South Wales has offered various programs including the Empowering Homes program for battery installations." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "These state programs often have eligibility requirements based on property value, household income, or whether you're a first-time solar adopter. They also have limited funding and may have waiting lists, so it's important to check current availability and requirements for your state." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Feed-in Tariffs Explained" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Feed-in tariffs (FiT) are payments you receive for excess solar electricity exported to the grid. When your solar panels generate more electricity than your home is using, that surplus is fed back into the grid, and your electricity retailer pays you for it. Feed-in tariff rates vary significantly between states and retailers, typically ranging from 3 to 12 cents per kWh." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "It's important to understand that feed-in tariffs are generally much lower than the rate you pay for electricity from the grid (which is typically 25-35 cents per kWh). This creates a strong financial incentive to maximize self-consumption—using your solar power directly rather than exporting it. The more of your solar generation you can use in your home, the better your financial return." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "To maximize self-consumption, consider running high-energy appliances like dishwashers, washing machines, and pool pumps during the day when your solar system is generating. Smart home energy management systems can automate this process, ensuring you use solar power optimally throughout the day." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Installation Costs and What's Included" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The cost of solar installations in Australia has decreased dramatically in recent years. As of 2024, you can expect to pay approximately $900-$1,200 per kilowatt installed for a quality system, meaning a 6.6kW system typically costs $6,000-$8,000 before rebates. After STCs and any state rebates, your out-of-pocket cost might be as low as $3,500-$5,500." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "This price should include everything needed for a complete, functioning system: solar panels, inverter, mounting hardware, electrical work, connection to the grid, and necessary approvals and paperwork. Reputable installers will handle all the bureaucracy, including applying for STCs and arranging grid connection approval." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Be wary of extremely low-priced quotes, as they often involve inferior components or cut corners on installation quality. The cheapest system is rarely the best value over its lifetime. Quality panels from manufacturers like LG, SunPower, or REC, paired with reliable inverters from Fronius, SMA, or Enphase, will provide better performance and longevity." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "When comparing quotes, ensure you're comparing like with like. Check panel efficiency ratings, inverter warranties, installer certifications (Clean Energy Council accreditation is essential), and what's included in the warranty. A good warranty should cover panels for at least 25 years, inverters for 5-10 years, and workmanship for 5-10 years." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-8 h-8 text-orange-600" }),
            "Maximizing Your Solar Investment"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Roof Suitability and Orientation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "In Australia, north-facing roofs receive the most direct sunlight and are ideal for solar panels. However, east and west-facing roofs can still be highly productive, typically generating 85-95% of what a north-facing roof would produce. Even south-facing roofs can work for solar, though they'll generate approximately 60-70% of optimal output." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The ideal roof pitch for solar panels in Australia varies by latitude but generally falls between 20 and 35 degrees. Fortunately, most Australian homes have roof pitches within this range. Flat roofs can also accommodate solar panels using tilt frames, though this adds to installation costs." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Shading is one of the most critical factors affecting solar performance. Even partial shading from trees, chimneys, or neighboring buildings can significantly reduce system output. Before installation, a reputable installer should conduct a shade analysis to identify and minimize shading impacts. In some cases, tree trimming or strategic panel placement can overcome shading issues." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Your roof's condition matters too. Solar panels last 25+ years, so your roof should be in good condition before installation. If your roof needs replacement within the next 5-10 years, consider doing it before installing solar to avoid the cost of removing and reinstalling panels later." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Inverter Technologies and Options" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "The inverter is the brain of your solar system, converting the DC electricity generated by your panels into AC electricity usable in your home. There are three main types of inverters to consider: string inverters, microinverters, and power optimizers." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: 'String inverters are the most common and cost-effective option. All panels connect in series (a "string") to a single central inverter. They work well for roofs without shading issues and where all panels face the same direction. However, the entire string performs only as well as the weakest panel, so shading or a dirty panel can impact the whole system.' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Microinverters attach to each individual panel, allowing each to operate independently. This is ideal for complex roofs with multiple orientations or shading issues. If one panel is shaded or malfunctioning, it doesn't affect the others. Microinverters are more expensive but can provide better overall performance in challenging installations." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Power optimizers are a middle ground, combining features of both technologies. They attach to each panel like microinverters but work in conjunction with a central inverter. This provides much of the panel-level optimization of microinverters while keeping costs closer to traditional string inverters." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "not-prose my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "mid-content", className: "mx-auto" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Battery Storage Considerations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Solar batteries allow you to store excess solar generation for use at night or during peak pricing periods. While batteries are becoming more popular, they're not financially necessary for most households. The payback period for batteries alone is typically 10-15 years, compared to 3-6 years for solar panels without storage." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "However, batteries make sense in several scenarios. If you're on a time-of-use tariff with high peak rates, storing solar energy for use during expensive evening periods can provide significant savings. If you experience frequent blackouts, a battery with backup capability provides energy security. Some people also value the energy independence and environmental benefits of battery storage, even if the financial case is marginal." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Battery costs have been falling but remain substantial. A typical 10-13.5kWh home battery system costs $8,000-$15,000 installed, though state rebates can reduce this significantly. Battery technology is also evolving rapidly, so unless you have a specific need now, it might be worth installing solar panels first and adding a battery in a few years when prices drop further." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "If you think you might add a battery later, ensure your initial solar installation is battery-ready. This means installing a hybrid inverter (which can work with batteries) rather than a standard string inverter, or choosing a system that can be easily retrofitted with battery storage." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Monitoring and Maintenance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Modern solar systems come with monitoring apps that show real-time generation, consumption, and export data. This visibility is valuable for understanding your energy usage patterns and ensuring your system is performing as expected. Most monitoring systems will alert you to any problems or underperformance." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Solar panels require minimal maintenance, but some attention ensures optimal performance. In most areas of Australia, rain provides sufficient cleaning. However, in dusty regions or areas with bird activity, panels may benefit from occasional cleaning. Dirty panels can lose 5-20% of their efficiency, so an annual clean can be worthwhile." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Professional cleaning typically costs $150-$300 and involves safely accessing your roof and cleaning panels with deionized water to prevent mineral deposits. Some homeowners clean panels themselves with a long-handled brush and hose, but roof safety should be a priority." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Beyond cleaning, have your system inspected every few years by a qualified technician. They'll check electrical connections, inspect mounting hardware, and ensure everything is secure and functioning properly. This preventative maintenance can catch small issues before they become expensive problems." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Understanding Electricity Plans with Solar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Once you have solar, your electricity plan becomes more important than ever. Different retailers offer varying feed-in tariff rates, and some offer plans specifically designed for solar customers. Shopping around can save you hundreds of dollars annually." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Time-of-use (TOU) tariffs can work well with solar, especially if you have a battery. These plans charge different rates depending on the time of day—peak (typically 2-8pm), shoulder, and off-peak periods. If you can shift electricity usage to off-peak times or use battery storage during peak times, TOU tariffs can reduce your bills significantly." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Some retailers offer virtual power plant (VPP) programs where your battery participates in a network that helps stabilize the grid during high-demand periods. In exchange, you receive higher feed-in tariffs or other financial incentives. These programs are becoming more common as more households install solar and battery systems." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Property Value and Solar Panels" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Multiple studies have shown that homes with solar panels sell faster and for higher prices than comparable homes without solar. Australian real estate data suggests solar panels can increase property value by $10,000-$20,000 or more, depending on system size and quality." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Buyers appreciate the immediate electricity cost savings and protection against future price increases. In the competitive Australian property market, solar panels are increasingly seen as a standard feature rather than an upgrade, particularly in sunny states like Queensland and Western Australia." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "If you're planning to sell your home in the near future, installing solar beforehand can provide a good return on investment. Even if you only own the home for a few years post-installation, the increased sale price often equals or exceeds the cost of the system, and you benefit from reduced electricity bills in the interim." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold mt-8 mb-4", children: "Common Mistakes to Avoid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "One of the biggest mistakes is choosing a solar installer based solely on price. While cost matters, the cheapest quote often means inferior components, inexperienced installers, or inadequate warranties. A quality installation from a reputable company provides better long-term value and peace of mind." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Oversizing your system beyond your needs is another common error. While it might seem logical to install the biggest system your roof can accommodate, if you're not using the electricity or battery storage, you're paying more upfront for minimal additional benefit. The lower feed-in tariffs mean you won't recoup the extra investment through exports alone." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Failing to research and compare feed-in tariffs is leaving money on the table. Some homeowners stick with their existing retailer without realizing other retailers offer significantly better solar feed-in rates. Switching can be quick and easy, potentially saving hundreds annually." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Not understanding how your system warranty works is risky. Know what's covered, for how long, and whether the installer or manufacturer is responsible. Keep all warranty documentation safe and understand the claims process. Some warranties require regular maintenance to remain valid." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6", children: "Finally, don't ignore the importance of quality components. While all solar panels might look similar, differences in cell technology, manufacturing quality, and degradation rates significantly impact long-term performance. Investing in tier-one panels from established manufacturers provides better reliability and output over the system's 25+ year lifespan." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AutoAdSlot, { placement: "in-feed", className: "my-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-8 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border-2 border-yellow-200 dark:border-yellow-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Ready to Go Solar?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Get free quotes from CEC-accredited solar installers in your area. Compare prices and find the best system for your home." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-8 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all", children: "Get Free Quotes" })
        ] }) })
      ] })
    }
  );
}
export {
  SolarSavingsCalculator as default
};
