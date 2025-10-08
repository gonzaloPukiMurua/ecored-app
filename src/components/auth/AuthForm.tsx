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
  const router = useRouter();
  const title = isLogin ? 'Inicia Sesión' : 'Regístrate'
  const buttonText = isLogin ? 'Entrar' : 'Crear Cuenta'

  const { login, register, loading, error } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email') as string
    const password = form.get('password') as string
    
    try{
        if (isLogin) {
            await login(email, password);
            router.push("/home");
        } else {
            const confirmPassword = form.get('confirmPassword') as string;
            if (password !== confirmPassword) {
                alert("Passwords does not match");
                return;
            }
            await register(email, password, confirmPassword);
            router.push("/");
        }
    }catch(error){
        console.error(error);
        alert("Auth error");
    }
  }

  return (
    <div className={styles.authWrapper}>
      <h2 className={styles.formTitle}>{title}</h2>

      <FormContainer onSubmit={handleSubmit}>
        <div className={styles.fieldGroup}>
          <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
          <FormInput id="email" type="email" name="email" placeholder="ejemplo@ecored.com" required />
        </div>

        <div className={styles.fieldGroup}>
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <FormInput id="password" type="password" name="password" placeholder="Mínimo 8 caracteres" required />
        </div>

        {!isLogin && (
          <div className={styles.fieldGroup}>
            <FormLabel htmlFor="confirmPassword">Confirmar Contraseña</FormLabel>
            <FormInput id="confirmPassword" type="password" name="confirmPassword" required />
          </div>
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button type="submit" variant="default" className={styles.submitButton} disabled={loading}>
          {loading ? 'Procesando...' : buttonText}
        </Button>

        <p className={styles.toggleText}>
          {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes una cuenta? '}
          <Link href={isLogin ? '?type=register' : '?type=login'} className={styles.toggleLink}>
            {isLogin ? 'Regístrate' : 'Inicia Sesión'}
          </Link>
        </p>
      </FormContainer>
    </div>
  )
}
