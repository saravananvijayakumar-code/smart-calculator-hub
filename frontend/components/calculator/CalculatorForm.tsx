import React, { ReactNode, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, RotateCcw, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CalculatorFormProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  children: ReactNode;
  onCalculate: () => void;
  onReset?: () => void;
  isCalculating?: boolean;
  isValid?: boolean;
  calculateButtonText?: string;
  resetButtonText?: string;
  showResetButton?: boolean;
  className?: string;
  formClassName?: string;
}

export function CalculatorForm({
  title,
  description,
  icon,
  children,
  onCalculate,
  onReset,
  isCalculating = false,
  isValid = true,
  calculateButtonText = 'Calculate',
  resetButtonText = 'Reset',
  showResetButton = true,
  className,
  formClassName,
}: CalculatorFormProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isValid && !isCalculating) {
      onCalculate();
    }
  };

  return (
    <Card className={cn('', className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon || <Calculator className="h-5 w-5 text-primary" />}
          {title}
        </CardTitle>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className={cn('space-y-4', formClassName)}>
          {children}
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1"
              disabled={!isValid || isCalculating}
            >
              {isCalculating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="mr-2 h-4 w-4" />
                  {calculateButtonText}
                </>
              )}
            </Button>
            
            {showResetButton && onReset && (
              <Button
                type="button"
                variant="outline"
                onClick={onReset}
                disabled={isCalculating}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                {resetButtonText}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default CalculatorForm;