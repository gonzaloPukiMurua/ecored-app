// src/components/layout/Sidebar/Sidebar.tsx
'use client';

import * as React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarClasses = clsx(
    styles.sidebar,
    isOpen && styles.open
  );

  const handleNavLinkClick = () => {
    onClose();
  };

  return (
    <>
      <div className={sidebarClasses}>
        <nav className={styles.navLinks}>
          <Link href="/about" className={styles.navLink} onClick={handleNavLinkClick}>
            Acerca
          </Link>
          <Link href="/profile" className={styles.navLink} onClick={handleNavLinkClick}>
            Perfil
          </Link>

        </nav>
      </div>

      {isOpen && <div className={styles.overlay} onClick={onClose} />}
    </>
  );
}