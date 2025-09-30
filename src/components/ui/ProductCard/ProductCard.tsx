import * as React from 'react';
import styles from './ProductCard.module.css';
import clsx from 'clsx';
import { Button } from '@/components/ui/Button/Button';

interface ProductCardProps extends React.ComponentPropsWithoutRef<'div'> {
  imageUrl: string;
  title: string;
  subtitle: string;
  price?: number;
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ imageUrl, title, subtitle, price, className, ...props }, ref) => {
    
    const cardClasses = clsx(styles.card, className);

    return (
      <div ref={ref} className={cardClasses} {...props}>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={title} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          
          <div className={styles.footer}>
            {price && <span className={styles.price}>${price.toFixed(2)}</span>}
            <Button size="sm" variant="secondary" asChild>
                <div style={{ padding: '0.4rem 0.8rem' }}>Ver</div>
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

ProductCard.displayName = 'ProductCard';