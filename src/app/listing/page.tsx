'use client';

import * as React from 'react';
import { FilterSidebar } from '@/components/layout/FilterSidebar/FilterSidebar';
import { ListingGrid } from '@/components/layout/ListingGrid/ListingGrid';
import styles from './products.module.css';
import { ListingResponse } from '@/services/listing/types';
import { ListingService } from '@/services/listing/listing.service';

export default function ListingsPage() {
  const [listings, setListings] = React.useState<ListingResponse[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadListings() {
      try {
        const response = await ListingService.getAll();
        console.log("Esto devuelve service: ", response);
        setListings(response); // ListingsResponse tiene la propiedad 'listings'
      } catch (error) {
        console.error('Error al cargar los listings:', error);
      } finally {
        setLoading(false);
      }
    }

    loadListings();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Catálogo de Publicaciones</h1>

      <div className={styles.contentLayout}>
        <FilterSidebar />
        <main className={styles.resultsArea}>
          {loading ? (
            <p>Cargando publicaciones...</p>
          ) : (
            <ListingGrid
              listings={listings}
              headerText={`Mostrando ${listings.length} resultados para 'Todos'`}
            />
          )}
        </main>
      </div>
    </div>
  );
}
