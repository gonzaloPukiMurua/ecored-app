import * as React from "react"
import styles from './Button.module.css';
import { Slot } from "@radix-ui/react-slot";
import clsx from 'clsx';

// 1. Tipos simplificados para el componente
type ButtonVariant = 'default' | 'secondary' | 'tertiary';
type ButtonSize = 'defaultSize' | 'sm' | 'lg' | 'icon';

interface ButtonProps extends React.ComponentProps<"button"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ 
        className, 
        variant = 'default', 
        size = 'defaultSize',
        asChild = false, 
        ...props 
    }, ref) => {
        const Comp = asChild ? Slot : "button";

        // 2. Combinación de Clases

        const buttonClasses = clsx(
            styles.button,
            styles[variant],
            styles[size],
            className
        );

        return (
            <Comp
                ref={ref}
                className={buttonClasses}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";