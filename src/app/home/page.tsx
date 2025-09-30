// src/app/home/page.tsx
import * as React from 'react';
import { ProductListing } from '@/components/layout/ProductListing/ProductListing';
import styles from './home.module.css';

const dummyProducts = [
  { id: 1, imageUrl: 'https://via.placeholder.com/300x225?text=Cerca+Mío', title: 'Compostera Orgánica', subtitle: 'Recién publicado', price: 45.00 },
  { id: 2, imageUrl: 'https://via.placeholder.com/300x225?text=Preferencias', title: 'Semillas de Albahaca', subtitle: 'Para tu huerta', price: 5.50 },
  { id: 3, imageUrl: 'https://via.placeholder.com/300x225?text=Publicado', title: 'Canasta de Mimbre', subtitle: 'Ideal para la compra', price: 20.00 },
  { id: 4, imageUrl: 'https://via.placeholder.com/300x225?text=Nuevo', title: 'Aceite de Coco (Orgánico)', subtitle: 'Reciclaje', price: 12.00 },
  { id: 5, imageUrl: 'https://via.placeholder.com/300x225?text=Populares', title: 'Guantes de Jardinería', subtitle: 'De cuero reciclado', price: 18.00 },
  { id: 6, imageUrl: 'https://via.placeholder.com/300x225?text=Oferta', title: 'Kit de Cultivo Urbano', subtitle: 'Perfecto para balcones', price: 35.00 },
];

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.pageTitle}>Explorar EcoRED</h1>

      <ProductListing 
        title="Productos Cerca Tuyo" 
        products={dummyProducts.slice(0, 4)} 
      />

      <ProductListing 
        title="Basado en tus Preferencias" 
        products={dummyProducts.slice(2)} 
      />

      <ProductListing 
        title="Recién Publicados" 
        products={dummyProducts.slice(1, 5)} 
      />
      
    </div>
  );
}