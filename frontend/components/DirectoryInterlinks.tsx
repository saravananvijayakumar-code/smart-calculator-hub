import { Link } from 'react-router-dom';
import { Folder, ArrowRight } from 'lucide-react';
import { AppleStyleCard } from './AppleStyleCard';
import { getDirectoryInterlinks } from '../config/interlinking';

interface DirectoryInterlinksProps {
  currentPath: string;
  title?: string;
}

const DIRECTORY_INFO: Record<string, { name: string; description: string }> = {
  '/financial/tools': { name: 'Financial Tools', description: 'Loans, investments, and tax calculators' },
  '/health/tools': { name: 'Health Tools', description: 'BMI, fitness, and wellness calculators' },
  '/math/tools': { name: 'Math Tools', description: 'Percentage, fraction, and scientific calculators' },
  '/utility/tools': { name: 'Utility Tools', description: 'Everyday calculators and converters' },
  '/us/tools': { name: 'US Tax & Finance', description: 'Federal tax, 401k, and loan calculators' },
  '/uk/tools': { name: 'UK Tax & Finance', description: 'Stamp duty, pension, and ISA calculators' },
  '/india/tools': { name: 'India Tax & Finance', description: 'EPF, SIP, GST, and tax calculators' },
  '/australia/tools': { name: 'Australia Tax & Finance', description: 'Super, CGT, and property calculators' },
  '/aupay/tools': { name: 'AU Pay Tax Hub', description: 'Payroll, bonus, and leave tax calculators' },
  '/insurance/tools': { name: 'Insurance Calculators', description: 'Life, health, car, and pet insurance' },
  '/viral/tools': { name: 'Viral Calculators', description: 'Compatibility, zodiac, and fun tools' },
  '/ai/social': { name: 'AI Social Tools', description: 'Caption, hashtag, and profile analyzers' },
  '/ai/relationships': { name: 'AI Relationship Tools', description: 'Compatibility and profile analysis' },
  '/ai/wellness': { name: 'AI Wellness Tools', description: 'Mood journal and wellness trackers' },
  '/ai/parenting': { name: 'AI Parenting Tools', description: 'Baby names and parenting helpers' },
  '/ai/shopping': { name: 'AI Shopping Tools', description: 'Gift recommender and shopping helpers' },
  '/finder/tools': { name: 'Finder Tools', description: 'Pet breeds, plants, and decor finders' },
  '/tools': { name: 'General Tools', description: 'IP lookup, browser info, and utilities' },
  '/calculators/us': { name: 'US Calculators', description: 'All US-specific calculators' },
  '/calculators/uk': { name: 'UK Calculators', description: 'All UK-specific calculators' },
  '/calculators/india': { name: 'India Calculators', description: 'All India-specific calculators' },
  '/calculators/australia': { name: 'Australia Calculators', description: 'All Australia-specific calculators' },
  '/calculators/health': { name: 'Health Calculators', description: 'All health and fitness calculators' },
  '/calculators/insurance': { name: 'Insurance Calculators', description: 'All insurance calculators' },
};

export function DirectoryInterlinks({ currentPath, title = 'Related Calculator Categories' }: DirectoryInterlinksProps) {
  const relatedPaths = getDirectoryInterlinks(currentPath);
  
  if (relatedPaths.length === 0) return null;

  return (
    <AppleStyleCard className="mt-8">
      <div className="flex items-center gap-2 mb-6">
        <Folder className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedPaths.map((path) => {
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
  );
}
