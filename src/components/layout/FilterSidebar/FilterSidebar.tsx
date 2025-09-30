// src/components/layout/FilterSidebar/FilterSidebar.tsx
import * as React from 'react';
import styles from './FilterSidebar.module.css';
import clsx from 'clsx';

interface FilterSidebarProps {
  className?: string;
}

export function FilterSidebar({ className }: FilterSidebarProps) {
  const sidebarClasses = clsx(styles.sidebar, className);

  return (
    <aside className={sidebarClasses}>
      <h2 className={styles.title}>Filtros</h2>
      
      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>Categoría</h3>
        <p className={styles.placeholder}>[Filtro de Categorías]</p>
      </div>

      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>Rango de Precios</h3>
        <p className={styles.placeholder}>[Filtro de Precios]</p>
      </div>
      
      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>Ubicación</h3>
        <p className={styles.placeholder}>[Filtro de Ubicación]</p>
      </div>
    </aside>
  );
}