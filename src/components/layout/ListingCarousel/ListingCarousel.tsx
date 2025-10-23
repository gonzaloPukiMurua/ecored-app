import * as React from 'react';
import styles from './ListingCarousel.module.css';
import { ListingCard } from '@/components/ui/ListingCard/ListingCard';
import clsx from 'clsx';
import type { ListingResponse } from '@/services/listing/types';

interface ListingCarouselProps {
  title: string;
  listings: ListingResponse[];
  className?: string;
}

export function ListingCarousel({ title, listings, className }: ListingCarouselProps) {
  const listingClasses = clsx(styles.listing, className);

  return (
    <section className={listingClasses}>
      <h2 className={styles.title}>{title}</h2>

      {/* ✅ corregido: ahora usa styles.listingContainer */}
      <div className={styles.listingContainer}>
        {listings.map((listing) => (
          <div key={listing.listing_id} className={styles.itemWrapper}>
            <ListingCard
              imageUrl={listing.photos?.[0]?.url ?? 'https://via.placeholder.com/300x225?text=EcoRED'}
              title={listing.title}
              subtitle={listing.category.name ?? 'Sin categoría'}
              slug={listing.listing_id}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
