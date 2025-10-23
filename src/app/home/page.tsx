// src/app/home/page.tsx
// src/app/home/page.tsx
'use client';

import * as React from 'react';
import { ListingCarousel } from '@/components/layout/ListingCarousel/ListingCarousel';
import styles from './home.module.css';
import { ListingService } from '@/services/listing/listing.service';
import type { ListingResponse } from '@/services/listing/types';

export default function HomePage() {
  const [listings, setListings] = React.useState<ListingResponse[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchListings() {
      try {
        const data = await ListingService.getAll();
        console.log("Esto recivo del service: ", data);
        setListings(data);
      } catch (err) {
        console.error('Error al obtener los listados:', err);
        setError('No se pudieron cargar los productos');
      } finally {
        setLoading(false);
      }
    }

    fetchListings();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.pageTitle}>Explorar EcoRED</h1>

      {loading && <p>Cargando productos...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && listings.length > 0 && (
        <ListingCarousel
          title="Productos Cerca Tuyo"
          listings={listings}
        />
      )}

      {!loading && !error && listings.length === 0 && (
        <p>No hay productos publicados aún.</p>
      )}
    </div>
  );
}
