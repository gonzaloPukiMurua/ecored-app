// src/components/layout/ListingDetailView/ListingDetailView.tsx
'use client';

import * as React from 'react';
import styles from './ListingDetailView.module.css';
import { Button } from '@/components/ui/Button/Button';
import type { ListingResponse } from '@/services/listing/types';
import { RequestService } from '@/services/request/request.service';
import { useRouter } from 'next/navigation';

interface ListingDetailViewProps {
  listing: ListingResponse;
}

export function ListingDetailView({ listing }: ListingDetailViewProps) {
  const {
    listing_id,
    title,
    description,
    category,
    zone_text,
    item_condition,
    status,
    photos,
    created_at,
  } = listing;

  const images =
    photos && photos.length > 0
      ? photos.map((p) => p.url)
      : ['https://via.placeholder.com/600x450?text=Sin+imagen'];

  const [mainImage, setMainImage] = React.useState(images[0]);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleCreateRequest = async () => {
    try {
      setIsLoading(true);
      const response = await RequestService.create({ listing_id });
      console.log('Request creada:', response);
      alert('Solicitud enviada correctamente ✅');
      router.push('/home');
    } catch (error: any) {
      console.error('Error al crear la request:', error);
      alert(
        error.response?.data?.message ??
        'Ocurrió un error al crear la solicitud.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {/* Galería de imágenes */}
        <section className={styles.imageGallery}>
          <div className={styles.mainImageContainer}>
            <img src={mainImage} alt={title} className={styles.mainImage} />
          </div>
          <div className={styles.thumbnailContainer}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} - Vista ${index + 1}`}
                className={styles.thumbnail}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </section>

        {/* Detalles principales */}
        <section className={styles.detailsArea}>
          <h1 className={styles.title}>{title}</h1>

          <p className={styles.category}>
            Categoría:{' '}
            <span className={styles.data}>
              {typeof category === 'string' ? category : category?.name ?? 'Sin categoría'}
            </span>
          </p>

          {zone_text && (
            <p className={styles.location}>
              Zona: <span className={styles.data}>{zone_text}</span>
            </p>
          )}

          <p className={styles.condition}>
            Condición: <span className={styles.data}>{item_condition}</span>
          </p>

          <p className={styles.status}>
            Estado: <span className={styles.data}>{status}</span>
          </p>

          <div className={styles.priceActions}>
            <span className={styles.price}>—</span>
            <Button
              variant="default"
              size="lg"
              onClick={handleCreateRequest}
              disabled={isLoading}
            >
              {isLoading ? 'Enviando...' : 'Comprar / Intercambiar'}
            </Button>
          </div>

          <p className={styles.meta}>
            Publicado el: {new Date(created_at).toLocaleDateString()}
          </p>
        </section>
      </div>

      {/* Descripción */}
      <div className={styles.secondaryContent}>
        <section className={styles.descriptionSection}>
          <h2 className={styles.sectionTitle}>Descripción</h2>
          <p className={styles.descriptionText}>
            {description || 'El usuario no ha proporcionado una descripción.'}
          </p>
        </section>
      </div>
    </div>
  );
}
