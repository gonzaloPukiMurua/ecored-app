'use client';

import * as React from 'react';
import { FormContainer } from '@/components/ui/FormContainer/FormContainer';
import { FormLabel } from '@/components/ui/FormLabel/FormLabel';
import { FormInput } from '@/components/ui/FormInput/FormInput';
import { Button } from '@/components/ui/Button/Button';
import Link from 'next/link';
import styles from './AuthForm.module.css';

interface AuthFormProps {
  type: 'login' | 'register';
}

export function AuthForm({ type }: AuthFormProps) {
  const isLogin = type === 'login';
  const title = isLogin ? 'Inicia Sesión' : 'Regístrate';
  const buttonText = isLogin ? 'Entrar' : 'Crear Cuenta';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Formulario de ${isLogin ? 'Login' : 'Registro'} enviado!`);

  };

  return (
    <div className={styles.authWrapper}>
        <h2 className={styles.formTitle}>{title}</h2>

        <FormContainer onSubmit={handleSubmit}>
            
            <div className={styles.fieldGroup}>
                <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
                <FormInput 
                    id="email" 
                    type="email" 
                    name="email" 
                    placeholder="ejemplo@ecored.com" 
                    required 
                />
            </div>
            
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
                <div className={styles.fieldGroup}>
                    <FormLabel htmlFor="confirmPassword">Confirmar Contraseña</FormLabel>
                    <FormInput 
                        id="confirmPassword" 
                        type="password" 
                        name="confirmPassword" 
                        required 
                    />
                </div>
            )}

            <Button type="submit" variant="default" className={styles.submitButton}>
                {buttonText}
            </Button>
            
            {/* Enlace para cambiar entre formularios */}
            <p className={styles.toggleText}>
                {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes una cuenta? '}
                <Link href={isLogin ? '?type=register' : '?type=login'} className={styles.toggleLink}>
                    {isLogin ? 'Regístrate' : 'Inicia Sesión'}
                </Link>
            </p>
            
        </FormContainer>
    </div>
  );
}