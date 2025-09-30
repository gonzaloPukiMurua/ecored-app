// src/components/layout/ProductGrid/ProductGrid.tsx
import * as React from 'react';
import styles from './ProductGrid.module.css';
import { ProductCard } from '@/components/ui/ProductCard/ProductCard';

interface Product {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  price: number;
}

interface ProductGridProps {
  products: Product[];
  className?: string;
  headerText?: string;
}

export function ProductGrid({ products, className, headerText }: ProductGridProps) {
  return (
    <div className={styles.gridContainer}>
      {headerText && <h3 className={styles.header}>{headerText}</h3>}
      
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
          />
        ))}
      </div>
      
    </div>
  );
}