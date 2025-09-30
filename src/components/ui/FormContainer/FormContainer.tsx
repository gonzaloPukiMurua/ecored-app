import * as React from 'react';
import styles from './FormContainer.module.css';
import clsx from 'clsx';

interface FormContainerProps extends React.ComponentPropsWithoutRef<'form'> {
  variant?: 'default' | 'auth'; 
}

export const FormContainer = React.forwardRef<HTMLFormElement, FormContainerProps>(
  ({ className, children, variant = 'auth', ...props }, ref) => {
    
    const containerClasses = clsx(
      styles.formContainer,
      styles[variant],
      className
    );

    return (
      <form ref={ref} className={containerClasses} {...props}>
        {children}
      </form>
    );
  }
);

FormContainer.displayName = 'FormContainer';