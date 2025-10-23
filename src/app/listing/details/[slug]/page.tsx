'use client';

import * as React from 'react';
import { ListingDetailView } from '@/components/layout/ListingDetailView/ListingDetailView';
import { ListingService } from '@/services/listing/listing.service';
import type { ListingResponse } from '@/services/listing/types';

interface PageProps {
  params: Promise<{ slug: string }>; // 👈 Ahora Next entrega una Promise
}

export default function ListingDetailPage({ params }: PageProps) {
  const resolvedParams = React.use(params); // 👈 usamos React.use() para obtener el valor real
  const slug = resolvedParams.slug;

  const [listing, setListing] = React.useState<ListingResponse | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchListing() {
      try {
        const data = await ListingService.getById(slug);
        console.log("Esto recibo del service: ", data);
        setListing(data);
      } catch (err) {
        console.error('Error al obtener el detalle del listing:', err);
        setError('No se pudo cargar la información del producto.');
      } finally {
        setLoading(false);
      }
    }

    fetchListing();
  }, [slug]);

  if (loading) return <p style={{ padding: '2rem' }}>Cargando detalle...</p>;
  if (error) return <p style={{ padding: '2rem', color: 'red' }}>{error}</p>;
  if (!listing) return <p style={{ padding: '2rem' }}>No se encontró el producto.</p>;

  return <ListingDetailView listing={listing} />;
}
