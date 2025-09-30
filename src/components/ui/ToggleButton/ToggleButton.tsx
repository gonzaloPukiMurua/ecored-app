// src/components/ui/ToggleButton/ToggleButton.tsx
'use client';

import * as React from 'react';
import clsx from 'clsx';
import styles from './ToggleButton.module.css';

interface ToggleButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  isOpen: boolean;
}

export const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  ({ isOpen, className, ...props }, ref) => {
    const buttonClasses = clsx(
      styles.toggleButton,
      isOpen && styles.open, // Aplica la clase 'open' si el menú está abierto
      className
    );

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        <div className={styles.iconLine} />
        <div className={styles.iconLine} />
        <div className={styles.iconLine} />
      </button>
    );
  }
);

ToggleButton.displayName = 'ToggleButton';