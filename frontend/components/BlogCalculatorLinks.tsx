import { Link } from 'react-router-dom';
import { Calculator, ArrowRight } from 'lucide-react';
import { AppleStyleCard } from './AppleStyleCard';
import { CALCULATOR_DATA } from './CalculatorCategory';

interface BlogCalculatorLinksProps {
  calculatorIds: string[];
  title?: string;
}

export function BlogCalculatorLinks({ calculatorIds, title = 'Try These Calculators' }: BlogCalculatorLinksProps) {
  const calculators = calculatorIds
    .map(id => CALCULATOR_DATA.find(calc => calc.id === id))
    .filter(Boolean);
  
  if (calculators.length === 0) return null;

  return (
    <AppleStyleCard className="mt-8">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {calculators.map((calculator) => (
          <Link
            key={calculator!.id}
            to={calculator!.path}
            className="group"
          >
            <div className="p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-accent/50 transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                    {calculator!.name}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {calculator!.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AppleStyleCard>
  );
}

export const BLOG_CALCULATOR_MAPPING: Record<string, string[]> = {
  'mortgage': ['mortgage', 'loan-affordability', 'property-tax', 'first-home-buyer', 'heloc', 'compound-interest'],
  'loan': ['loan', 'mortgage', 'auto-loan', 'student-loan', 'debt-consolidation', 'credit-card-payoff'],
  'tax': ['federal-tax', 'state-tax', 'au-income-tax', 'income-tax', 'gst', 'cgt'],
  'retirement': ['retirement', '401k-retirement', 'pension', 'superannuation', 'epf', 'investment'],
  'health': ['bmi', 'bmr', 'body-fat', 'calorie-burn', 'weight-loss-steps', 'water-intake'],
  'fitness': ['bmi', 'calorie-burn', 'heart-rate-zone', 'bmr', 'weight-loss-steps', 'body-fat'],
  'investment': ['investment', 'roi', 'compound-interest', 'sip', 'ppf', 'isa'],
  'insurance': ['life-insurance', 'health-insurance', 'car-insurance', 'pet-insurance', 'travel-insurance'],
  'australia': ['au-income-tax', 'superannuation', 'property-tax', 'cgt', 'negative-gearing', 'first-home-buyer'],
  'uk': ['stamp-duty', 'pension', 'isa', 'national-insurance', 'btl-mortgage'],
  'india': ['income-tax', 'epf', 'sip', 'ppf', 'gst', 'emi'],
  'us': ['federal-tax', 'state-tax', '401k-retirement', 'mortgage', 'student-loan'],
  'pregnancy': ['pregnancy-due-date', 'ovulation', 'bmi', 'baby-name-generator'],
  'compatibility': ['love-compatibility', 'friend-compatibility', 'zodiac-compatibility', 'ai-compatibility'],
  'social-media': ['caption-generator', 'hashtag-generator', 'instagram-bio-analyzer', 'tiktok-profile-score'],
};

export function getBlogCalculatorSuggestions(blogContent: string, blogTags?: string[]): string[] {
  const content = blogContent.toLowerCase();
  const suggestions = new Set<string>();
  
  Object.entries(BLOG_CALCULATOR_MAPPING).forEach(([keyword, calculatorIds]) => {
    if (content.includes(keyword) || blogTags?.some(tag => tag.toLowerCase().includes(keyword))) {
      calculatorIds.forEach(id => suggestions.add(id));
    }
  });
  
  return Array.from(suggestions).slice(0, 6);
}
