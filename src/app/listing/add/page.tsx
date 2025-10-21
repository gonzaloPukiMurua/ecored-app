// src/app/listing/add/page.tsx
'use client'

import { ListingForm } from '@/components/listing/ListingForm/ListingForm'
import styles from '../products.module.css' // 👈 Import correcto de los estilos

export default function AddListingPage() {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Agregar publicación</h1>
      <div className={styles.contentLayout}>
        <div className={styles.resultsArea}>
          <ListingForm />
        </div>
      </div>
    </div>
  )
}
