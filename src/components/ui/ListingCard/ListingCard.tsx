import * as React from 'react';
import styles from './ListingCard.module.css';
import clsx from 'clsx';
import { Button } from '@/components/ui/Button/Button';

interface ListingCardProps extends React.ComponentPropsWithoutRef<'div'> {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export const ListingCard = React.forwardRef<HTMLDivElement, ListingCardProps>(
  ({ imageUrl, title, subtitle, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(styles.card, className)} {...props}>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={title} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
    );
  }
);

ListingCard.displayName = 'ListingCard';