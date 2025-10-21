// src/components/layout/ProductListing/ProductListing.tsx
import * as React from 'react';
import styles from './Listing.module.css';
import { ListingCard } from '@/components/ui/ListingCard/ListingCard';
import clsx from 'clsx';

// Tipo de datos simplificado
interface Listing {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  price: number;
}

interface ListingProps {
  title: string;
  listings: Listing[];
  className?: string;
}

export function Listing({ title, listings, className }: ListingProps) {
  
  const listingClasses = clsx(styles.listing, className);

  return (
    <section className={listingClasses}>
      <h2 className={styles.title}>{title}</h2>
      
      <div className={styles.listingsContainer}>
        {listings.map(listing => (
          <div key={listing.id} className={styles.itemWrapper}>
             <ListingCard
                imageUrl={listing.imageUrl}
                title={listing.title}
                subtitle={listing.subtitle}
                price={listing.price}
             />
          </div>
        ))}
      </div>
    </section>
  );
}