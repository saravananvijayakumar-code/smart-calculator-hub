import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Folder } from 'lucide-react';
import { AppleStyleCard } from './AppleStyleCard';
import { CALCULATOR_DATA, CalculatorItem } from './CalculatorCategory';
import { getRelatedCalculators, getRelatedDirectories } from '../config/interlinking';
import { DirectoryInterlinks } from './DirectoryInterlinks';

interface RelatedCalculatorsProps {
  currentCalculatorId: string;
  limit?: number;
  showPopular?: boolean;
  showDirectories?: boolean;
}

export function RelatedCalculators({ currentCalculatorId, limit = 6, showPopular = false, showDirectories = true }: RelatedCalculatorsProps) {
  const currentCalculator = CALCULATOR_DATA.find(calc => calc.id === currentCalculatorId);
  
  if (!currentCalculator) return null;

  const relatedIds = getRelatedCalculators(currentCalculatorId);
  const relatedDirectoryPaths = getRelatedDirectories(currentCalculatorId);
  
  const getRelatedCalculatorsList = (): CalculatorItem[] => {
    if (showPopular) {
      return CALCULATOR_DATA
        .filter(calc => calc.id !== currentCalculatorId)
        .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
        .slice(0, limit);
    }
    
    if (relatedIds.length > 0) {
      return relatedIds
        .map(id => CALCULATOR_DATA.find(calc => calc.id === id))
        .filter(Boolean)
        .slice(0, limit) as CalculatorItem[];
    }
    
    return CALCULATOR_DATA
      .filter(calc => 
        calc.id !== currentCalculatorId &&
        (calc.category === currentCalculator.category || calc.region === currentCalculator.region)
      )
      .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
      .slice(0, limit);
  };

  const relatedCalculators = getRelatedCalculatorsList();

  const DIRECTORY_INFO: Record<string, { name: string; description: string }> = {
    '/financial/tools': { name: 'Financial Tools', description: 'Loans, investments, and tax calculators' },
    '/health/tools': { name: 'Health Tools', description: 'BMI, fitness, and wellness calculators' },
    '/math/tools': { name: 'Math Tools', description: 'Percentage and scientific calculators' },
    '/utility/tools': { name: 'Utility Tools', description: 'Everyday calculators and converters' },
    '/us/tools': { name: 'US Tax & Finance', description: 'Federal tax and loan calculators' },
    '/uk/tools': { name: 'UK Tax & Finance', description: 'Stamp duty and pension calculators' },
    '/india/tools': { name: 'India Tax & Finance', description: 'EPF, SIP, and GST calculators' },
    '/australia/tools': { name: 'Australia Tax & Finance', description: 'Super and CGT calculators' },
    '/aupay/tools': { name: 'AU Pay Tax Hub', description: 'Payroll and bonus tax calculators' },
    '/insurance/tools': { name: 'Insurance Calculators', description: 'Life, health, and car insurance' },
    '/viral/tools': { name: 'Viral Calculators', description: 'Compatibility and fun tools' },
    '/ai/social': { name: 'AI Social Tools', description: 'Caption and hashtag generators' },
    '/ai/relationships': { name: 'AI Relationship Tools', description: 'Compatibility analyzers' },
    '/ai/wellness': { name: 'AI Wellness Tools', description: 'Mood and wellness trackers' },
    '/ai/parenting': { name: 'AI Parenting Tools', description: 'Baby name generators' },
    '/ai/shopping': { name: 'AI Shopping Tools', description: 'Gift recommenders' },
    '/finder/tools': { name: 'Finder Tools', description: 'Pet and plant finders' },
    '/tools': { name: 'General Tools', description: 'IP lookup and utilities' },
    '/calculators/health': { name: 'Health Calculators', description: 'All health calculators' },
    '/calculators/us': { name: 'US Calculators', description: 'All US calculators' },
    '/calculators/uk': { name: 'UK Calculators', description: 'All UK calculators' },
    '/calculators/india': { name: 'India Calculators', description: 'All India calculators' },
    '/calculators/australia': { name: 'Australia Calculators', description: 'All Australia calculators' },
    '/calculators/insurance': { name: 'Insurance Calculators', description: 'All insurance calculators' },
  };

  if (relatedCalculators.length === 0 && relatedDirectoryPaths.length === 0) return null;

  return (
    <>
    <AppleStyleCard className="mt-8">
      <div className="flex items-center gap-2 mb-6">
        {showPopular ? (
          <>
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold">Popular Calculators</h3>
          </>
        ) : (
          <>
            <ArrowRight className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold">Related Calculators</h3>
          </>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {relatedCalculators.map((calculator) => (
          <Link
            key={calculator.id}
            to={calculator.path}
            className="group"
          >
            <div className="p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-accent/50 transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                    {calculator.name}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {calculator.description}
                  </p>
                  {calculator.featured && (
                    <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md">
                      Featured
                    </span>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <Link 
          to="/calculators" 
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
        >
          View all calculators
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </AppleStyleCard>
    
    {showDirectories && relatedDirectoryPaths.length > 0 && (
      <AppleStyleCard className="mt-8">
        <div className="flex items-center gap-2 mb-6">
          <Folder className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-semibold">Explore More Calculators</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedDirectoryPaths.map((path) => {
            const info = DIRECTORY_INFO[path];
            if (!info) return null;
            
            return (
              <Link
                key={path}
                to={path}
                className="group"
              >
                <div className="p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 h-full">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                        {info.name}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {info.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-2" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </AppleStyleCard>
    )}
    </>
  );
}