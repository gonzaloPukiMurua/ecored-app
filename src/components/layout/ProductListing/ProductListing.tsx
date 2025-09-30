// src/components/layout/ProductListing/ProductListing.tsx
import * as React from 'react';
import styles from './ProductListing.module.css';
import { ProductCard } from '@/components/ui/ProductCard/ProductCard';
import clsx from 'clsx';

// Tipo de datos simplificado
interface Product {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  price: number;
}

interface ProductListingProps {
  title: string;
  products: Product[];
  className?: string;
}

export function ProductListing({ title, products, className }: ProductListingProps) {
  
  const listingClasses = clsx(styles.listing, className);

  return (
    <section className={listingClasses}>
      <h2 className={styles.title}>{title}</h2>
      
      <div className={styles.productsContainer}>
        {products.map(product => (
          <div key={product.id} className={styles.itemWrapper}>
             <ProductCard
                imageUrl={product.imageUrl}
                title={product.title}
                subtitle={product.subtitle}
                price={product.price}
             />
          </div>
        ))}
      </div>
    </section>
  );
}