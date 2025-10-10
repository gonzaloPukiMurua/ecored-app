'use client'

import * as React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { ToggleButton } from '@/components/ui/ToggleButton/ToggleButton'
import { Sidebar } from '@/components/layout/Sidebar/Sidebar'
import { useAuthStore } from '@/store/useAuthStore'
import { useRouter } from 'next/navigation'

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  const { user, logout } = useAuthStore()
  const router = useRouter()

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  const handleLogout = () => {
    logout()
    router.push('/') // Redirigir al home o login al cerrar sesión
  }
  if(user){
    console.log("Este es el user: ", user.name)
  }else{
    console.log("User indefinido")
  }
  return (
    <>
      <nav className={styles.navbar}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          EcoRED
        </Link>

        {/* Toggle para sidebar móvil */}
        <ToggleButton isOpen={isSidebarOpen} onClick={toggleSidebar} />

        {/* Navegación Desktop */}
        <div className={styles.desktopNavLinks}>
          <Link href="/about" className={styles.navLink}>
            Acerca
          </Link>

          {user ? (
            <>
              <span className={styles.userName}>👤 {user.name}</span>
              <button onClick={handleLogout} className={styles.navButton}>
                Cerrar sesión
              </button>
              <Link href="/profile" className={styles.navLink}>
                Perfil
              </Link>
            </>
          ) : (
            <>
              <Link href="/auth/login" className={styles.navLink}>
                Iniciar sesión
              </Link>
              <Link href="/auth/register" className={styles.navLink}>
                Registrarse
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Sidebar móvil */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  )
}
