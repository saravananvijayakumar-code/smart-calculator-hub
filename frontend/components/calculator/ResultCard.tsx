import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus, Info } from 'lucide-react';

export interface ResultItem {
  label: string;
  value: string | number;
  format?: 'currency' | 'percentage' | 'number' | 'text';
  trend?: 'up' | 'down' | 'neutral';
  highlight?: boolean;
  icon?: ReactNode;
  description?: string;
}

export interface ResultCardProps {
  title: string;
  description?: string;
  results: ResultItem[];
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
  children?: ReactNode;
}

function formatValue(value: string | number, format?: ResultItem['format']): string {
  if (typeof value === 'string') return value;
  
  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    case 'percentage':
      return `${value.toFixed(2)}%`;
    case 'number':
      return new Intl.NumberFormat('en-US').format(value);
    default:
      return String(value);
  }
}

function TrendIcon({ trend }: { trend: ResultItem['trend'] }) {
  switch (trend) {
    case 'up':
      return <TrendingUp className="h-4 w-4 text-green-500" />;
    case 'down':
      return <TrendingDown className="h-4 w-4 text-red-500" />;
    case 'neutral':
      return <Minus className="h-4 w-4 text-muted-foreground" />;
    default:
      return null;
  }
}

export function ResultCard({
  title,
  description,
  results,
  variant = 'default',
  className,
  children,
}: ResultCardProps) {
  const variantStyles = {
    default: '',
    success: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950',
    warning: 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950',
    error: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950',
  };

  return (
    <Card className={cn(variantStyles[variant], className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          {title}
          {variant === 'success' && <Badge variant="default" className="bg-green-500">Success</Badge>}
          {variant === 'warning' && <Badge variant="default" className="bg-yellow-500">Warning</Badge>}
          {variant === 'error' && <Badge variant="destructive">Error</Badge>}
        </CardTitle>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {results.map((result, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center justify-between py-2',
                result.highlight && 'bg-primary/5 -mx-4 px-4 rounded-lg',
                index !== results.length - 1 && !result.highlight && 'border-b'
              )}
            >
              <div className="flex items-center gap-2">
                {result.icon}
                <div>
                  <p className={cn(
                    'text-sm',
                    result.highlight ? 'font-semibold' : 'text-muted-foreground'
                  )}>
                    {result.label}
                  </p>
                  {result.description && (
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <Info className="h-3 w-3" />
                      {result.description}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <TrendIcon trend={result.trend} />
                <span className={cn(
                  'font-medium',
                  result.highlight && 'text-lg text-primary',
                  result.trend === 'up' && 'text-green-600',
                  result.trend === 'down' && 'text-red-600'
                )}>
                  {formatValue(result.value, result.format)}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {children}
      </CardContent>
    </Card>
  );
}

export default ResultCard;