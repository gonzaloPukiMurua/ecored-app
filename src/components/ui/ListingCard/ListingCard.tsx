// src/components/ui/ListingCard/ListingCard.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import styles from './ListingCard.module.css';
import clsx from 'clsx';
import { Button } from '@/components/ui/Button/Button';

interface ListingCardProps extends React.ComponentPropsWithoutRef<'div'> {
  imageUrl: string;
  title: string;
  subtitle: string;
  slug: string; // <-- nuevo
}

export const ListingCard = React.forwardRef<HTMLDivElement, ListingCardProps>(
  ({ imageUrl, title, slug, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(styles.card, className)} {...props}>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={title} className={styles.image} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>

          <div className={styles.actions}>
            <Link href={`/listing/details/${slug}`} passHref>
              <Button>Ver detalles</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

ListingCard.displayName = 'ListingCard';
