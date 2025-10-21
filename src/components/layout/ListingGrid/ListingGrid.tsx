// src/components/layout/ListingGrid/ListingGrid.tsx

import * as React from 'react';
import styles from './ListingGrid.module.css';
import { ListingCard } from '@/components/ui/ListingCard/ListingCard';

interface Listing {
  listing_id: string;
  title: string;
  description: string;
  photos?: { url: string }[];
  zone_text?: string;
}

interface ListingGridProps {
  listings: Listing[];
  className?: string;
  headerText?: string;
}

export function ListingGrid({ listings, className, headerText }: ListingGridProps) {
  return (
    <div className={styles.gridContainer}>
      {headerText && <h3 className={styles.header}>{headerText}</h3>}
      
      <div className={styles.grid}>
        {listings.map(listing => (
          <ListingCard
            key={listing.listing_id}
            imageUrl={listing.photos?.[0]?.url || 'https://via.placeholder.com/300x225?text=Sin+Imagen'}
            title={listing.title}
            subtitle={listing.zone_text || listing.description}
          />
        ))}
      </div>
    </div>
  );
}
