'use client';

import * as React from 'react';
import { ListingDetailView } from '@/components/layout/ListingDetailView/ListingDetailView';

const getDummyProduct = (slug: string) => ({
    id: 1,
    title: `Mesa de Centro de Bambú Reciclado (${slug})`,
    price: 155.99,
    description: "Mesa de centro artesanal hecha a mano con bambú recuperado de obras. Ideal para una decoración minimalista y ecológica. Cada pieza es única y contribuye a la reducción de residuos. Dimensiones perfectas para apartamentos y espacios reducidos. Requiere montaje sencillo.",
    images: [
        'https://via.placeholder.com/600x450?text=Imagen+1+(Principal)',
        'https://via.placeholder.com/60x60?text=T-2',
        'https://via.placeholder.com/60x60?text=T-3',
        'https://via.placeholder.com/60x60?text=T-4',
    ],
    category: 'Muebles Reciclados',
    location: 'Buenos Aires, Argentina',
    specifications: [
        { label: 'Material', value: 'Bambú y Madera Recuperada' },
        { label: 'Dimensiones', value: '80cm x 50cm x 40cm (Ancho x Prof x Alt)' },
        { label: 'Peso', value: '7.5 kg' },
        { label: 'Condición', value: 'Excelente, con detalles rústicos' },
    ],
});

interface PageProps {
    params: { slug: string };
}

export default function ListingDetailPage({ params }: PageProps) {
    const listingData = getDummyProduct(params.slug);
    
    return (
        <ListingDetailView listing={listingData} />
    );
}