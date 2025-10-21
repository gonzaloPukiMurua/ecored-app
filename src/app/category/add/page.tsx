'use client'

import { CategoryForm } from '@/components/category/CategoryForm/CategoryForm'
import styles from '../../listing/products.module.css'

export default function AddCategoryPage() {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Agregar categoría</h1>
      <div className={styles.contentLayout}>
        <div className={styles.resultsArea}>
          <CategoryForm />
        </div>
      </div>
    </div>
  )
}
