// src/components/ui/FormInput/FormInput.tsx
import * as React from 'react';
import styles from './FormInput.module.css';
import clsx from 'clsx';

export const FormInput = React.forwardRef<
  HTMLInputElement, 
  React.ComponentPropsWithoutRef<'input'> // Usamos el tipo base directamente
>(
  ({ className, type = 'text', ...props }, ref) => {
    
    const inputClasses = clsx(styles.input, className);

    return (
      <input ref={ref} type={type} className={inputClasses} {...props} />
    );
  }
);

FormInput.displayName = 'FormInput';