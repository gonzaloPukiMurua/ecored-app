import * as React from 'react';
import styles from './ProductDetailView.module.css';
import { Button } from '@/components/ui/Button/Button';

interface ProductDetail {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  location: string;
  specifications: { label: string; value: string }[];
}

interface ProductDetailViewProps {
  product: ProductDetail;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const { title, price, description, images, category, location, specifications } = product;
  const [mainImage, setMainImage] = React.useState(images[0]);
  
  return (
    <div className={styles.container}>

      <div className={styles.mainContent}>
        
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

        <section className={styles.detailsArea}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.category}>Categoría: <span className={styles.data}>{category}</span></p>
          <p className={styles.location}>Ubicación: <span className={styles.data}>{location}</span></p>
          
          <div className={styles.priceActions}>
            <span className={styles.price}>${price.toFixed(2)}</span>
            <Button variant="default" size="lg">Comprar/Intercambiar</Button>
          </div>
        </section>
      </div>

      <div className={styles.secondaryContent}>
        
        <section className={styles.descriptionSection}>
          <h2 className={styles.sectionTitle}>Descripción</h2>
          <p className={styles.descriptionText}>{description}</p>
        </section>
        
        <section className={styles.specsSection}>
          <h2 className={styles.sectionTitle}>Especificaciones y Dimensiones</h2>
          <ul className={styles.specsList}>
            {specifications.map((spec, index) => (
              <li key={index} className={styles.specItem}>
                <span className={styles.specLabel}>{spec.label}:</span>
                <span className={styles.specValue}>{spec.value}</span>
              </li>
            ))}
          </ul>
        </section>
        
      </div>
    </div>
  );
}