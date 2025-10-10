'use client'

import * as React from 'react'
import { FormContainer } from '@/components/ui/FormContainer/FormContainer'
import { FormLabel } from '@/components/ui/FormLabel/FormLabel'
import { FormInput } from '@/components/ui/FormInput/FormInput'
import { Button } from '@/components/ui/Button/Button'
import Link from 'next/link'
import { useAuthStore } from '@/store/useAuthStore'
import { useRouter } from 'next/navigation'
import styles from './AuthForm.module.css'

interface AuthFormProps {
  type: 'login' | 'register'
}

export function AuthForm({ type }: AuthFormProps) {
  const isLogin = type === 'login'
  const router = useRouter()
  const title = isLogin ? 'Inicia Sesión' : 'Regístrate'
  const buttonText = isLogin ? 'Entrar' : 'Crear Cuenta'

  const { login, register, loading, error } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email') as string
    const password = form.get('password') as string

    try {
      if (isLogin) {
        // Login simple
        await login({email, password})
        router.push('/home')
      } else {
        // Registro según CreateUserDto
        const name = form.get('name') as string
        const username = form.get('username') as string
        const confirm_password = form.get('confirm_password') as string
        const zone_text = form.get('zone_text') as string | undefined

        if (password !== confirm_password) {
          alert('Las contraseñas no coinciden')
          return
        }

        await register({ name, email, username, password, confirm_password, zone_text })
        router.push('/')
      }
    } catch (error) {
      console.error(error)
      alert('Error de autenticación')
    }
  }

  return (
    <div className={styles.authWrapper}>
      <h2 className={styles.formTitle}>{title}</h2>

      <FormContainer onSubmit={handleSubmit}>
        {!isLogin && (
          <div className={styles.fieldGroup}>
            <FormLabel htmlFor="name">Nombre completo</FormLabel>
            <FormInput id="name" type="text" name="name" placeholder="Juan Pérez" required />
          </div>
        )}

        <div className={styles.fieldGroup}>
          <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
          <FormInput id="email" type="email" name="email" placeholder="ejemplo@ecored.com" required />
        </div>

        {!isLogin && (
          <div className={styles.fieldGroup}>
            <FormLabel htmlFor="username">Nombre de usuario</FormLabel>
            <FormInput id="username" type="text" name="username" placeholder="juanperez123" required />
          </div>
        )}

        <div className={styles.fieldGroup}>
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <FormInput
            id="password"
            type="password"
            name="password"
            placeholder="Mínimo 8 caracteres"
            required
          />
        </div>

        {!isLogin && (
          <>
            <div className={styles.fieldGroup}>
              <FormLabel htmlFor="confirm_password">Confirmar Contraseña</FormLabel>
              <FormInput id="confirm_password" type="password" name="confirm_password" required />
            </div>

            <div className={styles.fieldGroup}>
              <FormLabel htmlFor="zone_text">Zona (opcional)</FormLabel>
              <FormInput
                id="zone_text"
                type="text"
                name="zone_text"
                placeholder="Córdoba Capital, Barrio Centro"
              />
            </div>
          </>
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button
          type="submit"
          variant="default"
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? 'Procesando...' : buttonText}
        </Button>

        <p className={styles.toggleText}>
          {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes una cuenta? '}
          <Link href={isLogin ? '/auth/register' : '/auth/login'} className={styles.toggleLink}>
            {isLogin ? 'Regístrate' : 'Inicia Sesión'}
          </Link>
        </p>
      </FormContainer>
    </div>
  )
}
