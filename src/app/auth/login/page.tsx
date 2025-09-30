"use client"

import { AuthForm } from '@/components/auth/AuthForm';
import styles from '../auth.module.css'

export default function LoginPage() {
  return (
    <div className={styles.authLayout}>
      <AuthForm type="login" />
    </div>
  );
}