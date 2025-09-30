import * as React from 'react';
import { FilterSidebar } from '@/components/layout/FilterSidebar/FilterSidebar';
import { ProductGrid } from '@/components/layout/ProductGrid/ProductGrid';
import styles from './products.module.css';

const dummyProducts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    imageUrl: `https://via.placeholder.com/300x225?text=Producto+${i + 1}`,
    title: `Artículo de Eco ${i + 1}`,
    subtitle: `Detalle rápido del producto ${i + 1}`,
    price: 15.00 + i * 2,
}));

export default function ProductsPage() {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Catálogo de Productos</h1>

      <div className={styles.contentLayout}>
        <FilterSidebar />
        <main className={styles.resultsArea}>
          <ProductGrid 
            products={dummyProducts} 
            headerText="Mostrando 12 resultados para 'Todos'"
          />
        </main>
      </div>
    </div>
  );
}