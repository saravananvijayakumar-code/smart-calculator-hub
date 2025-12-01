import { n as createLucideIcon } from "./index-C_OXA6OQ.js";
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
];
const Folder = createLucideIcon("folder", __iconNode);
const CALCULATOR_INTERLINKS = {
  "bmi": {
    relatedCalculators: ["body-fat", "bmr", "ideal-weight", "waist-hip-ratio", "weight-loss-steps", "water-intake", "calorie-burn", "heart-rate-zone"],
    relatedDirectories: ["/health/tools", "/calculators/health", "/ai/wellness"]
  },
  "body-fat": {
    relatedCalculators: ["bmi", "waist-hip-ratio", "bmr", "ideal-weight", "weight-loss-steps", "calorie-burn", "water-intake"],
    relatedDirectories: ["/health/tools", "/calculators/health", "/ai/wellness"]
  },
  "bmr": {
    relatedCalculators: ["bmi", "body-fat", "calorie-burn", "weight-loss-steps", "water-intake", "ideal-weight", "waist-hip-ratio"],
    relatedDirectories: ["/health/tools", "/calculators/health", "/ai/wellness"]
  },
  "ideal-weight": {
    relatedCalculators: ["bmi", "body-fat", "bmr", "waist-hip-ratio", "weight-loss-steps", "calorie-burn", "water-intake"],
    relatedDirectories: ["/health/tools", "/calculators/health", "/ai/wellness"]
  },
  "waist-hip-ratio": {
    relatedCalculators: ["bmi", "body-fat", "ideal-weight", "bmr", "weight-loss-steps", "heart-rate-zone", "water-intake"],
    relatedDirectories: ["/health/tools", "/calculators/health", "/ai/wellness"]
  },
  "water-intake": {
    relatedCalculators: ["bmi", "bmr", "calorie-burn", "weight-loss-steps", "body-fat", "ideal-weight", "sleep"],
    relatedDirectories: ["/health/tools", "/calculators/health", "/ai/wellness"]
  },
  "sleep": {
    relatedCalculators: ["water-intake", "heart-rate-zone", "bmi", "bmr", "calorie-burn", "mood-journal", "life-expectancy"],
    relatedDirectories: ["/health/tools", "/calculators/health", "/ai/wellness"]
  },
  "heart-rate-zone": {
    relatedCalculators: ["bmi", "bmr", "calorie-burn", "waist-hip-ratio", "body-fat", "sleep", "water-intake"],
    relatedDirectories: ["/health/tools", "/calculators/health", "/ai/wellness"]
  },
  "pregnancy-due-date": {
    relatedCalculators: ["ovulation", "bmi", "water-intake", "sleep", "ideal-weight", "baby-name-generator"],
    relatedDirectories: ["/health/tools", "/ai/parenting", "/calculators/health"]
  },
  "ovulation": {
    relatedCalculators: ["pregnancy-due-date", "bmi", "water-intake", "sleep", "ideal-weight"],
    relatedDirectories: ["/health/tools", "/ai/parenting", "/calculators/health"]
  },
  "weight-loss-steps": {
    relatedCalculators: ["bmi", "bmr", "calorie-burn", "body-fat", "ideal-weight", "waist-hip-ratio", "water-intake", "heart-rate-zone"],
    relatedDirectories: ["/health/tools", "/calculators/health", "/ai/wellness"]
  },
  "calorie-burn": {
    relatedCalculators: ["bmi", "bmr", "weight-loss-steps", "body-fat", "ideal-weight", "water-intake", "heart-rate-zone", "waist-hip-ratio"],
    relatedDirectories: ["/health/tools", "/calculators/health", "/ai/wellness"]
  },
  "mortgage": {
    relatedCalculators: ["loan", "investment", "roi", "compound-interest", "retirement", "loan-affordability", "property-tax", "heloc", "first-home-buyer"],
    relatedDirectories: ["/financial/tools", "/us/tools", "/calculators/us", "/calculators/australia"]
  },
  "loan": {
    relatedCalculators: ["mortgage", "auto-loan", "student-loan", "business-loan", "debt-consolidation", "loan-affordability", "credit-card-payoff", "heloc", "home-loan"],
    relatedDirectories: ["/financial/tools", "/us/tools", "/calculators/us", "/calculators/india"]
  },
  "investment": {
    relatedCalculators: ["compound-interest", "roi", "retirement", "401k-retirement", "sip", "ppf", "epf", "isa", "simple-interest"],
    relatedDirectories: ["/financial/tools", "/us/tools", "/calculators/india", "/calculators/uk"]
  },
  "compound-interest": {
    relatedCalculators: ["investment", "simple-interest", "roi", "retirement", "sip", "ppf", "isa", "401k-retirement"],
    relatedDirectories: ["/financial/tools", "/math/tools", "/calculators/india"]
  },
  "simple-interest": {
    relatedCalculators: ["compound-interest", "investment", "roi", "loan", "mortgage", "auto-loan"],
    relatedDirectories: ["/financial/tools", "/math/tools"]
  },
  "roi": {
    relatedCalculators: ["investment", "compound-interest", "profit-margin", "mortgage", "rental-yield", "negative-gearing", "btl-mortgage"],
    relatedDirectories: ["/financial/tools", "/calculators/australia", "/calculators/uk"]
  },
  "retirement": {
    relatedCalculators: ["401k-retirement", "investment", "compound-interest", "pension", "superannuation", "ppf", "epf", "emergency-fund"],
    relatedDirectories: ["/financial/tools", "/us/tools", "/calculators/uk", "/calculators/australia"]
  },
  "credit-card-payoff": {
    relatedCalculators: ["debt-consolidation", "loan", "student-loan", "emergency-fund", "paycheck", "salary", "federal-tax"],
    relatedDirectories: ["/financial/tools", "/us/tools", "/calculators/us"]
  },
  "emergency-fund": {
    relatedCalculators: ["retirement", "investment", "credit-card-payoff", "paycheck", "salary", "401k-retirement"],
    relatedDirectories: ["/financial/tools", "/us/tools"]
  },
  "federal-tax": {
    relatedCalculators: ["state-tax", "salary", "paycheck", "401k-retirement", "student-loan", "mortgage", "heloc"],
    relatedDirectories: ["/us/tools", "/financial/tools", "/calculators/us"]
  },
  "state-tax": {
    relatedCalculators: ["federal-tax", "salary", "paycheck", "401k-retirement", "mortgage", "auto-loan"],
    relatedDirectories: ["/us/tools", "/financial/tools", "/calculators/us"]
  },
  "401k-retirement": {
    relatedCalculators: ["retirement", "federal-tax", "state-tax", "salary", "investment", "compound-interest", "paycheck"],
    relatedDirectories: ["/us/tools", "/financial/tools", "/calculators/us"]
  },
  "student-loan": {
    relatedCalculators: ["loan", "federal-tax", "salary", "paycheck", "debt-consolidation", "credit-card-payoff", "auto-loan"],
    relatedDirectories: ["/us/tools", "/financial/tools", "/calculators/us"]
  },
  "auto-loan": {
    relatedCalculators: ["loan", "student-loan", "mortgage", "debt-consolidation", "loan-affordability", "salary", "paycheck"],
    relatedDirectories: ["/us/tools", "/financial/tools", "/calculators/us"]
  },
  "heloc": {
    relatedCalculators: ["mortgage", "loan", "debt-consolidation", "federal-tax", "loan-affordability", "property-tax"],
    relatedDirectories: ["/us/tools", "/financial/tools", "/calculators/us"]
  },
  "business-loan": {
    relatedCalculators: ["loan", "roi", "profit-margin", "auto-loan", "debt-consolidation", "business-liability"],
    relatedDirectories: ["/us/tools", "/financial/tools", "/calculators/us", "/insurance/tools"]
  },
  "debt-consolidation": {
    relatedCalculators: ["credit-card-payoff", "loan", "student-loan", "auto-loan", "heloc", "mortgage"],
    relatedDirectories: ["/us/tools", "/financial/tools", "/calculators/us"]
  },
  "loan-affordability": {
    relatedCalculators: ["mortgage", "loan", "salary", "paycheck", "auto-loan", "student-loan", "heloc"],
    relatedDirectories: ["/us/tools", "/financial/tools", "/calculators/us"]
  },
  "salary": {
    relatedCalculators: ["paycheck", "federal-tax", "state-tax", "401k-retirement", "emergency-fund", "loan-affordability"],
    relatedDirectories: ["/us/tools", "/financial/tools", "/calculators/us"]
  },
  "paycheck": {
    relatedCalculators: ["salary", "federal-tax", "state-tax", "401k-retirement", "emergency-fund", "tip"],
    relatedDirectories: ["/us/tools", "/financial/tools", "/calculators/us"]
  },
  "stamp-duty": {
    relatedCalculators: ["btl-mortgage", "pension", "isa", "national-insurance", "property-tax", "mortgage"],
    relatedDirectories: ["/uk/tools", "/financial/tools", "/calculators/uk"]
  },
  "isa": {
    relatedCalculators: ["pension", "investment", "compound-interest", "stamp-duty", "national-insurance", "roi"],
    relatedDirectories: ["/uk/tools", "/financial/tools", "/calculators/uk"]
  },
  "national-insurance": {
    relatedCalculators: ["pension", "isa", "stamp-duty", "btl-mortgage", "federal-tax", "income-tax"],
    relatedDirectories: ["/uk/tools", "/financial/tools", "/calculators/uk"]
  },
  "pension": {
    relatedCalculators: ["isa", "national-insurance", "retirement", "401k-retirement", "superannuation", "epf"],
    relatedDirectories: ["/uk/tools", "/financial/tools", "/calculators/uk"]
  },
  "btl-mortgage": {
    relatedCalculators: ["stamp-duty", "mortgage", "roi", "negative-gearing", "property-tax", "loan"],
    relatedDirectories: ["/uk/tools", "/financial/tools", "/calculators/uk"]
  },
  "epf": {
    relatedCalculators: ["ppf", "sip", "income-tax", "pension", "401k-retirement", "superannuation", "retirement"],
    relatedDirectories: ["/india/tools", "/financial/tools", "/calculators/india"]
  },
  "sip": {
    relatedCalculators: ["ppf", "epf", "investment", "compound-interest", "isa", "401k-retirement"],
    relatedDirectories: ["/india/tools", "/financial/tools", "/calculators/india"]
  },
  "income-tax": {
    relatedCalculators: ["epf", "ppf", "home-loan", "gst", "emi", "federal-tax", "au-income-tax"],
    relatedDirectories: ["/india/tools", "/financial/tools", "/calculators/india"]
  },
  "ppf": {
    relatedCalculators: ["epf", "sip", "income-tax", "investment", "compound-interest", "isa"],
    relatedDirectories: ["/india/tools", "/financial/tools", "/calculators/india"]
  },
  "home-loan": {
    relatedCalculators: ["emi", "income-tax", "mortgage", "loan", "gst", "property-tax"],
    relatedDirectories: ["/india/tools", "/financial/tools", "/calculators/india"]
  },
  "emi": {
    relatedCalculators: ["home-loan", "loan", "income-tax", "gst", "auto-loan", "mortgage"],
    relatedDirectories: ["/india/tools", "/financial/tools", "/calculators/india"]
  },
  "gst": {
    relatedCalculators: ["income-tax", "emi", "home-loan", "profit-margin", "discount"],
    relatedDirectories: ["/india/tools", "/financial/tools", "/calculators/india"]
  },
  "superannuation": {
    relatedCalculators: ["au-income-tax", "retirement", "pension", "epf", "401k-retirement", "property-tax", "cgt"],
    relatedDirectories: ["/australia/tools", "/financial/tools", "/calculators/australia"]
  },
  "property-tax": {
    relatedCalculators: ["cgt", "negative-gearing", "fbt", "au-income-tax", "superannuation", "stamp-duty", "mortgage"],
    relatedDirectories: ["/australia/tools", "/financial/tools", "/calculators/australia"]
  },
  "cgt": {
    relatedCalculators: ["property-tax", "negative-gearing", "au-income-tax", "investment", "roi", "superannuation"],
    relatedDirectories: ["/australia/tools", "/financial/tools", "/calculators/australia"]
  },
  "fbt": {
    relatedCalculators: ["au-income-tax", "superannuation", "property-tax", "cgt", "paycheck"],
    relatedDirectories: ["/australia/tools", "/financial/tools", "/calculators/australia"]
  },
  "negative-gearing": {
    relatedCalculators: ["property-tax", "cgt", "au-income-tax", "roi", "btl-mortgage", "mortgage"],
    relatedDirectories: ["/australia/tools", "/financial/tools", "/calculators/australia"]
  },
  "au-income-tax": {
    relatedCalculators: ["superannuation", "property-tax", "cgt", "fbt", "negative-gearing", "au-pay", "bonus-tax-au"],
    relatedDirectories: ["/australia/tools", "/financial/tools", "/calculators/australia"]
  },
  "au-pay": {
    relatedCalculators: ["au-income-tax", "superannuation", "bonus-tax-au", "unused-leave-au", "student-loan-au", "paycheck", "salary"],
    relatedDirectories: ["/australia/tools", "/aupay/tools", "/calculators/australia"]
  },
  "bonus-tax-au": {
    relatedCalculators: ["au-income-tax", "au-pay", "unused-leave-au", "superannuation", "federal-tax"],
    relatedDirectories: ["/australia/tools", "/aupay/tools", "/calculators/australia"]
  },
  "unused-leave-au": {
    relatedCalculators: ["au-pay", "bonus-tax-au", "au-income-tax", "superannuation", "paycheck"],
    relatedDirectories: ["/australia/tools", "/aupay/tools", "/calculators/australia"]
  },
  "student-loan-au": {
    relatedCalculators: ["au-income-tax", "au-pay", "student-loan", "loan", "debt-consolidation"],
    relatedDirectories: ["/australia/tools", "/aupay/tools", "/calculators/australia"]
  },
  "first-home-buyer": {
    relatedCalculators: ["mortgage", "stamp-duty", "property-tax", "loan-affordability", "au-income-tax", "cgt"],
    relatedDirectories: ["/australia/tools", "/financial/tools", "/calculators/australia"]
  },
  "life-insurance": {
    relatedCalculators: ["health-insurance", "pet-insurance", "car-insurance", "travel-insurance", "retirement", "emergency-fund"],
    relatedDirectories: ["/insurance/tools", "/financial/tools", "/calculators/insurance"]
  },
  "health-insurance": {
    relatedCalculators: ["life-insurance", "bmi", "pet-insurance", "travel-insurance", "emergency-fund"],
    relatedDirectories: ["/insurance/tools", "/health/tools", "/calculators/insurance"]
  },
  "car-insurance": {
    relatedCalculators: ["auto-loan", "life-insurance", "pet-insurance", "business-liability", "travel-insurance"],
    relatedDirectories: ["/insurance/tools", "/financial/tools", "/calculators/insurance"]
  },
  "pet-insurance": {
    relatedCalculators: ["pet-breed-finder", "life-insurance", "health-insurance", "emergency-fund"],
    relatedDirectories: ["/insurance/tools", "/finder/tools", "/calculators/insurance"]
  },
  "travel-insurance": {
    relatedCalculators: ["life-insurance", "health-insurance", "currency-converter", "date"],
    relatedDirectories: ["/insurance/tools", "/utility/tools", "/calculators/insurance"]
  },
  "solar-savings": {
    relatedCalculators: ["roi", "investment", "loan", "property-tax", "mortgage"],
    relatedDirectories: ["/insurance/tools", "/financial/tools", "/calculators/insurance"]
  },
  "legal-settlement": {
    relatedCalculators: ["business-liability", "car-insurance", "health-insurance", "roi"],
    relatedDirectories: ["/insurance/tools", "/calculators/insurance"]
  },
  "business-liability": {
    relatedCalculators: ["business-loan", "legal-settlement", "car-insurance", "profit-margin", "roi"],
    relatedDirectories: ["/insurance/tools", "/financial/tools", "/calculators/insurance"]
  },
  "percentage": {
    relatedCalculators: ["discount", "tip", "profit-margin", "roi", "gst", "compound-interest"],
    relatedDirectories: ["/math/tools", "/financial/tools", "/utility/tools"]
  },
  "age": {
    relatedCalculators: ["date", "life-expectancy", "retirement", "zodiac-compatibility", "life-path-number"],
    relatedDirectories: ["/math/tools", "/utility/tools", "/viral/tools"]
  },
  "unit-converter": {
    relatedCalculators: ["currency-converter", "percentage", "bmi", "water-intake", "calorie-burn"],
    relatedDirectories: ["/math/tools", "/utility/tools", "/health/tools"]
  },
  "scientific": {
    relatedCalculators: ["percentage", "fraction", "statistics", "unit-converter", "age"],
    relatedDirectories: ["/math/tools", "/utility/tools"]
  },
  "fraction": {
    relatedCalculators: ["percentage", "scientific", "statistics", "unit-converter"],
    relatedDirectories: ["/math/tools", "/utility/tools"]
  },
  "statistics": {
    relatedCalculators: ["scientific", "percentage", "fraction", "investment", "roi"],
    relatedDirectories: ["/math/tools", "/financial/tools", "/utility/tools"]
  },
  "tip": {
    relatedCalculators: ["percentage", "discount", "currency-converter", "paycheck", "salary"],
    relatedDirectories: ["/utility/tools", "/math/tools", "/financial/tools"]
  },
  "currency-converter": {
    relatedCalculators: ["tip", "discount", "investment", "travel-insurance", "unit-converter"],
    relatedDirectories: ["/utility/tools", "/financial/tools", "/insurance/tools"]
  },
  "discount": {
    relatedCalculators: ["percentage", "tip", "gst", "profit-margin", "currency-converter"],
    relatedDirectories: ["/utility/tools", "/math/tools", "/financial/tools"]
  },
  "date": {
    relatedCalculators: ["age", "pregnancy-due-date", "ovulation", "retirement", "loan"],
    relatedDirectories: ["/utility/tools", "/math/tools", "/health/tools"]
  },
  "password": {
    relatedCalculators: ["browser-info", "ip-lookup", "ssl-checker", "dns-ping"],
    relatedDirectories: ["/utility/tools", "/tools"]
  },
  "profit-margin": {
    relatedCalculators: ["roi", "percentage", "discount", "gst", "business-loan", "business-liability"],
    relatedDirectories: ["/financial/tools", "/math/tools", "/insurance/tools"]
  },
  "love-compatibility": {
    relatedCalculators: ["friend-compatibility", "zodiac-compatibility", "ai-compatibility", "life-path-number", "pickup-line-generator"],
    relatedDirectories: ["/viral/tools", "/ai/relationships", "/ai/social"]
  },
  "friend-compatibility": {
    relatedCalculators: ["love-compatibility", "zodiac-compatibility", "ai-compatibility", "instagram-bio-analyzer", "tiktok-profile-score"],
    relatedDirectories: ["/viral/tools", "/ai/relationships", "/ai/social"]
  },
  "zodiac-compatibility": {
    relatedCalculators: ["love-compatibility", "friend-compatibility", "life-path-number", "age"],
    relatedDirectories: ["/viral/tools", "/ai/relationships"]
  },
  "life-path-number": {
    relatedCalculators: ["zodiac-compatibility", "age", "love-compatibility", "life-expectancy"],
    relatedDirectories: ["/viral/tools", "/math/tools"]
  },
  "life-expectancy": {
    relatedCalculators: ["retirement", "age", "bmi", "life-path-number", "sleep"],
    relatedDirectories: ["/viral/tools", "/health/tools", "/financial/tools"]
  },
  "how-long-to-watch": {
    relatedCalculators: ["date", "age", "sleep", "calorie-burn"],
    relatedDirectories: ["/viral/tools", "/utility/tools"]
  },
  "ai-compatibility": {
    relatedCalculators: ["love-compatibility", "friend-compatibility", "profile-analyzer", "audience-analyzer", "tiktok-profile-score"],
    relatedDirectories: ["/ai/relationships", "/ai/social", "/viral/tools"]
  },
  "ai-text-detector": {
    relatedCalculators: ["caption-generator", "hashtag-generator", "instagram-bio-analyzer", "profile-analyzer"],
    relatedDirectories: ["/ai/social", "/ai/shopping", "/tools"]
  },
  "caption-generator": {
    relatedCalculators: ["hashtag-generator", "instagram-bio-analyzer", "ai-text-detector", "tiktok-profile-score", "profile-analyzer"],
    relatedDirectories: ["/ai/social", "/ai/relationships"]
  },
  "hashtag-generator": {
    relatedCalculators: ["caption-generator", "instagram-bio-analyzer", "tiktok-profile-score", "audience-analyzer", "ai-text-detector"],
    relatedDirectories: ["/ai/social", "/ai/shopping"]
  },
  "instagram-bio-analyzer": {
    relatedCalculators: ["caption-generator", "hashtag-generator", "profile-analyzer", "tiktok-profile-score", "audience-analyzer"],
    relatedDirectories: ["/ai/social", "/ai/relationships"]
  },
  "tiktok-profile-score": {
    relatedCalculators: ["instagram-bio-analyzer", "caption-generator", "hashtag-generator", "profile-analyzer", "audience-analyzer"],
    relatedDirectories: ["/ai/social", "/ai/relationships"]
  },
  "profile-analyzer": {
    relatedCalculators: ["instagram-bio-analyzer", "tiktok-profile-score", "audience-analyzer", "ai-compatibility", "caption-generator"],
    relatedDirectories: ["/ai/social", "/ai/relationships"]
  },
  "audience-analyzer": {
    relatedCalculators: ["profile-analyzer", "hashtag-generator", "caption-generator", "tiktok-profile-score", "instagram-bio-analyzer"],
    relatedDirectories: ["/ai/social", "/ai/shopping"]
  },
  "baby-name-generator": {
    relatedCalculators: ["pregnancy-due-date", "ovulation", "age", "life-path-number"],
    relatedDirectories: ["/ai/parenting", "/health/tools", "/viral/tools"]
  },
  "mood-journal": {
    relatedCalculators: ["sleep", "water-intake", "heart-rate-zone", "ai-compatibility", "life-expectancy"],
    relatedDirectories: ["/ai/wellness", "/health/tools", "/viral/tools"]
  },
  "pickup-line-generator": {
    relatedCalculators: ["love-compatibility", "ai-compatibility", "caption-generator", "friend-compatibility"],
    relatedDirectories: ["/ai/relationships", "/ai/social", "/viral/tools"]
  },
  "gift-recommender": {
    relatedCalculators: ["age", "love-compatibility", "friend-compatibility", "discount", "currency-converter"],
    relatedDirectories: ["/ai/shopping", "/ai/relationships", "/utility/tools"]
  },
  "pet-breed-finder": {
    relatedCalculators: ["pet-insurance", "plant-finder", "home-decor-style-finder", "gift-recommender"],
    relatedDirectories: ["/finder/tools", "/insurance/tools", "/ai/shopping"]
  },
  "plant-finder": {
    relatedCalculators: ["pet-breed-finder", "home-decor-style-finder", "solar-savings"],
    relatedDirectories: ["/finder/tools", "/tools"]
  },
  "home-decor-style-finder": {
    relatedCalculators: ["plant-finder", "pet-breed-finder", "gift-recommender", "mortgage", "first-home-buyer"],
    relatedDirectories: ["/finder/tools", "/ai/shopping", "/financial/tools"]
  },
  "image-compressor": {
    relatedCalculators: ["browser-info", "password", "caption-generator", "hashtag-generator"],
    relatedDirectories: ["/tools", "/ai/social", "/utility/tools"]
  },
  "smart-shortener": {
    relatedCalculators: ["browser-info", "ip-lookup", "password", "dns-ping"],
    relatedDirectories: ["/tools", "/utility/tools"]
  },
  "browser-info": {
    relatedCalculators: ["ip-lookup", "dns-ping", "ssl-checker", "internet-speed", "password"],
    relatedDirectories: ["/tools", "/utility/tools"]
  },
  "ip-lookup": {
    relatedCalculators: ["browser-info", "dns-ping", "ip-reputation", "internet-speed", "ssl-checker"],
    relatedDirectories: ["/tools", "/utility/tools"]
  },
  "dns-ping": {
    relatedCalculators: ["ip-lookup", "browser-info", "ssl-checker", "internet-speed", "ip-reputation"],
    relatedDirectories: ["/tools", "/utility/tools"]
  },
  "ssl-checker": {
    relatedCalculators: ["dns-ping", "ip-lookup", "browser-info", "internet-speed", "password"],
    relatedDirectories: ["/tools", "/utility/tools"]
  },
  "internet-speed": {
    relatedCalculators: ["dns-ping", "ip-lookup", "browser-info", "ssl-checker"],
    relatedDirectories: ["/tools", "/utility/tools"]
  },
  "ip-reputation": {
    relatedCalculators: ["ip-lookup", "dns-ping", "browser-info", "ssl-checker"],
    relatedDirectories: ["/tools", "/utility/tools"]
  }
};
const DIRECTORY_INTERLINKS = {
  "/financial/tools": ["/us/tools", "/uk/tools", "/india/tools", "/australia/tools", "/insurance/tools"],
  "/health/tools": ["/ai/wellness", "/viral/tools", "/calculators/health", "/ai/parenting", "/finder/tools"],
  "/math/tools": ["/utility/tools", "/financial/tools", "/viral/tools", "/ai/social", "/health/tools"],
  "/utility/tools": ["/math/tools", "/tools", "/financial/tools", "/viral/tools", "/ai/social"],
  "/us/tools": ["/financial/tools", "/uk/tools", "/india/tools", "/australia/tools", "/calculators/us"],
  "/uk/tools": ["/financial/tools", "/us/tools", "/india/tools", "/australia/tools", "/calculators/uk"],
  "/india/tools": ["/financial/tools", "/us/tools", "/uk/tools", "/australia/tools", "/calculators/india"],
  "/australia/tools": ["/financial/tools", "/us/tools", "/uk/tools", "/india/tools", "/aupay/tools"],
  "/aupay/tools": ["/australia/tools", "/financial/tools", "/calculators/australia", "/us/tools", "/uk/tools"],
  "/insurance/tools": ["/financial/tools", "/health/tools", "/finder/tools", "/calculators/insurance", "/australia/tools"],
  "/viral/tools": ["/ai/relationships", "/ai/social", "/health/tools", "/math/tools", "/utility/tools"],
  "/ai/social": ["/ai/relationships", "/viral/tools", "/ai/shopping", "/utility/tools", "/math/tools"],
  "/ai/relationships": ["/ai/social", "/viral/tools", "/ai/parenting", "/ai/wellness", "/health/tools"],
  "/ai/wellness": ["/health/tools", "/ai/parenting", "/ai/relationships", "/viral/tools", "/finder/tools"],
  "/ai/parenting": ["/ai/wellness", "/health/tools", "/ai/relationships", "/viral/tools", "/ai/social"],
  "/ai/shopping": ["/ai/social", "/finder/tools", "/utility/tools", "/ai/relationships", "/financial/tools"],
  "/finder/tools": ["/ai/shopping", "/insurance/tools", "/ai/wellness", "/health/tools", "/tools"],
  "/tools": ["/utility/tools", "/finder/tools", "/ai/social", "/math/tools", "/financial/tools"]
};
function getRelatedCalculators(calculatorId) {
  var _a;
  return ((_a = CALCULATOR_INTERLINKS[calculatorId]) == null ? void 0 : _a.relatedCalculators) || [];
}
function getRelatedDirectories(calculatorId) {
  var _a;
  return ((_a = CALCULATOR_INTERLINKS[calculatorId]) == null ? void 0 : _a.relatedDirectories) || [];
}
function getDirectoryInterlinks(directoryPath) {
  return DIRECTORY_INTERLINKS[directoryPath] || [];
}
export {
  Folder as F,
  getRelatedCalculators as a,
  getRelatedDirectories as b,
  getDirectoryInterlinks as g
};
