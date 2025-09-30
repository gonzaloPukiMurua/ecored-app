'use client';

import * as React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { ToggleButton } from '@/components/ui/ToggleButton/ToggleButton';
import { Sidebar } from '@/components/layout/Sidebar/Sidebar';

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          EcoRED
        </Link>
        
        <ToggleButton isOpen={isSidebarOpen} onClick={toggleSidebar} />

        <div className={styles.desktopNavLinks}> 
          <Link href="/about" className={styles.navLink}>
            Acerca
          </Link>
          <Link href="/profile" className={styles.navLink}>
            Perfil
          </Link>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}