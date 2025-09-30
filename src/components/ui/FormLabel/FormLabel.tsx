import * as React from 'react';
import styles from './FormLabel.module.css';
import clsx from 'clsx';

export const FormLabel = React.forwardRef<
  HTMLLabelElement, 
  React.ComponentPropsWithoutRef<'label'>
>(
  ({ className, children, ...props }, ref) => {
    
    const labelClasses = clsx(styles.label, className);

    return (
      <label ref={ref} className={labelClasses} {...props}>
        {children}
      </label>
    );
  }
);

FormLabel.displayName = 'FormLabel';