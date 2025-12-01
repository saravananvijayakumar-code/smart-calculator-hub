import { r as reactExports, ah as backend, j as jsxRuntimeExports, f as Card, g as CardHeader, h as CardTitle, T as TrendingUp, d as Clock, k as CardContent, a4 as Label, V as Input, B as Button } from "./index-CK9G4vW7.js";
import { C as CalculatorLayoutWithAds } from "./CalculatorLayoutWithAds-1BNqJiWR.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CNBeqKNb.js";
import { A as AIAnalysis } from "./AIAnalysis-B-4zh-eH.js";
import { E as ExportShareButtons } from "./ExportShareButtons-CgT0RkOg.js";
import { A as ArrowUpDown } from "./arrow-up-down-DVWUQIm1.js";
import "./AdsterraSlot-DCXIaKPD.js";
import "./AdsettraSlot-eVTrqIXX.js";
import "./EnhancedAIAnalysis-BaYCd8m5.js";
import "./badge-6THgoC_4.js";
import "./brain-CSngUEN8.js";
import "./target-4JeIm6Yk.js";
import "./circle-check-big-B8N3lfE-.js";
import "./arrow-right-Bjdtr8dz.js";
import "./lightbulb-DKPyzLdJ.js";
import "./index-IXOTxK3N.js";
import "./index-CjCmdDH1.js";
import "./check-DTsA1WpX.js";
import "./tabs-t5L32f7o.js";
import "./share-2-SpOWc355.js";
import "./link-C11IgQ5M.js";
import "./copy-BqV-1o4k.js";
import "./twitter-CFAqYlq6.js";
import "./facebook-BX8Qa6cK.js";
import "./linkedin-D9e3uSZB.js";
import "./message-circle-DZtFORhh.js";
import "./mail-DX6y6Mo7.js";
function CurrencyConverter() {
  const [amount, setAmount] = reactExports.useState("1");
  const [fromCurrency, setFromCurrency] = reactExports.useState("USD");
  const [toCurrency, setToCurrency] = reactExports.useState("EUR");
  const [result, setResult] = reactExports.useState(null);
  const [exchangeRate, setExchangeRate] = reactExports.useState(null);
  const [currencies, setCurrencies] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [lastUpdated, setLastUpdated] = reactExports.useState(null);
  const [autoConvert, setAutoConvert] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const loadCurrencies = async () => {
      try {
        const response = await backend.exchange.getCurrencies();
        setCurrencies(response.currencies);
      } catch (error) {
        console.error("Failed to load currencies:", error);
      }
    };
    loadCurrencies();
  }, []);
  reactExports.useEffect(() => {
    if (autoConvert && amount && fromCurrency && toCurrency && !isNaN(Number(amount))) {
      const timeoutId = setTimeout(() => {
        handleConvert();
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [amount, fromCurrency, toCurrency, autoConvert]);
  const handleConvert = async () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) return;
    setLoading(true);
    try {
      const response = await backend.exchange.convert({
        _from: fromCurrency,
        to: toCurrency,
        amount: Number(amount)
      });
      setResult(response.convertedAmount);
      setExchangeRate(response.rate);
      setLastUpdated(new Date(response.lastUpdated));
    } catch (error) {
      console.error("Conversion failed:", error);
    } finally {
      setLoading(false);
    }
  };
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(null);
    setExchangeRate(null);
  };
  const formatLastUpdated = (date) => {
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSecs = Math.floor(diffMs / 1e3);
    const diffMins = Math.floor(diffSecs / 60);
    if (diffSecs < 60) return `${diffSecs}s ago`;
    if (diffMins < 60) return `${diffMins}m ago`;
    return date.toLocaleTimeString();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CalculatorLayoutWithAds,
    {
      title: "Currency Converter",
      description: "Convert between 170+ currencies with real-time exchange rates",
      keywords: "currency converter, exchange rates, forex, currency exchange, real-time rates",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
            "Currency Converter",
            lastUpdated && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-sm font-normal text-muted-foreground flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
              "Updated ",
              formatLastUpdated(lastUpdated)
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-5 gap-4 items-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "amount", children: "Amount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "amount",
                    type: "number",
                    value: amount,
                    onChange: (e) => setAmount(e.target.value),
                    placeholder: "Enter amount",
                    min: "0",
                    step: "0.01"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "From" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: fromCurrency, onValueChange: setFromCurrency, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "max-h-60", children: currencies.map((currency) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: currency.code, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: currency.code }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: currency.symbol }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground truncate", children: currency.name })
                  ] }) }, currency.code)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "icon",
                  onClick: swapCurrencies,
                  title: "Swap currencies",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "h-4 w-4" })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "To" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: toCurrency, onValueChange: setToCurrency, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "max-h-60", children: currencies.map((currency) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: currency.code, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: currency.code }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: currency.symbol }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground truncate", children: currency.name })
                  ] }) }, currency.code)) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "autoConvert",
                    checked: autoConvert,
                    onChange: (e) => setAutoConvert(e.target.checked),
                    className: "rounded"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "autoConvert", className: "text-sm", children: "Auto-convert as you type" })
              ] }),
              !autoConvert && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleConvert, disabled: loading, children: loading ? "Converting..." : "Convert" })
            ] }),
            result !== null && exchangeRate !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AIAnalysis,
                {
                  analysisRequest: {
                    calculatorType: "currency-converter",
                    data: {
                      fromCurrency,
                      toCurrency,
                      amount: Number(amount),
                      convertedAmount: result,
                      exchangeRate,
                      rateDate: lastUpdated || /* @__PURE__ */ new Date()
                    }
                  },
                  autoRun: true,
                  title: "AI Currency Analysis",
                  description: "Get insights on exchange rates, market trends, and practical tips for currency conversion."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ExportShareButtons,
                {
                  calculatorType: "currency-converter",
                  inputs: {
                    amount: Number(amount),
                    fromCurrency,
                    toCurrency
                  },
                  results: {
                    convertedAmount: result,
                    exchangeRate,
                    lastUpdated: (lastUpdated == null ? void 0 : lastUpdated.toISOString()) || (/* @__PURE__ */ new Date()).toISOString()
                  },
                  title: "Currency Converter Report"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-primary/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-bold text-primary", children: [
                    result.toLocaleString(void 0, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 6
                    }),
                    " ",
                    toCurrency
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg text-muted-foreground", children: [
                    Number(amount).toLocaleString(),
                    " ",
                    fromCurrency
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    "1 ",
                    fromCurrency,
                    " = ",
                    exchangeRate.toLocaleString(void 0, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 6
                    }),
                    " ",
                    toCurrency
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    "1 ",
                    toCurrency,
                    " = ",
                    (1 / exchangeRate).toLocaleString(void 0, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 6
                    }),
                    " ",
                    fromCurrency
                  ] })
                ] })
              ] }) }) })
            ] }),
            loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" }),
              "Fetching real-time rates..."
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "About Currency Converter" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Convert between 170+ world currencies using real-time exchange rates. Perfect for travel planning, international business, and investment decisions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Features:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Real-time exchange rates" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• 170+ supported currencies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Auto-conversion as you type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Bidirectional rate display" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Professional accuracy" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Free to use" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Popular Currencies:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "USD - US Dollar" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "EUR - Euro" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "GBP - British Pound" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "JPY - Japanese Yen" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "CAD - Canadian Dollar" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "AUD - Australian Dollar" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "CHF - Swiss Franc" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "CNY - Chinese Yuan" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Exchange Rate Info" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Exchange rates are updated in real-time and may fluctuate based on market conditions. Rates shown are for informational purposes and may differ from actual trading rates." }) })
          ] })
        ] })
      ] })
    }
  );
}
export {
  CurrencyConverter,
  CurrencyConverter as default
};
