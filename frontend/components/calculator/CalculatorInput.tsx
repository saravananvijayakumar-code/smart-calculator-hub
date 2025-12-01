import React, { ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface CalculatorInputProps {
  id: string;
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: 'text' | 'number' | 'currency' | 'percentage';
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  error?: string;
  helpText?: string;
  disabled?: boolean;
  className?: string;
}

export function CalculatorInput({
  id,
  label,
  value,
  onChange,
  type = 'number',
  placeholder,
  prefix,
  suffix,
  min,
  max,
  step,
  required = false,
  error,
  helpText,
  disabled = false,
  className,
}: CalculatorInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Basic validation for number types
    if (type === 'number' || type === 'currency' || type === 'percentage') {
      // Allow empty, numbers, and decimal points
      if (newValue !== '' && !/^-?\d*\.?\d*$/.test(newValue)) {
        return;
      }
    }
    
    onChange(newValue);
  };

  const inputType = type === 'currency' || type === 'percentage' ? 'text' : type;

  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
            {prefix}
          </span>
        )}
        
        <Input
          id={id}
          type={inputType}
          inputMode={type === 'number' || type === 'currency' || type === 'percentage' ? 'decimal' : 'text'}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className={cn(
            prefix && 'pl-8',
            suffix && 'pr-12',
            error && 'border-destructive focus-visible:ring-destructive'
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
        />
        
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
            {suffix}
          </span>
        )}
      </div>
      
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
      
      {helpText && !error && (
        <p id={`${id}-help`} className="text-xs text-muted-foreground">
          {helpText}
        </p>
      )}
    </div>
  );
}

export default CalculatorInput;