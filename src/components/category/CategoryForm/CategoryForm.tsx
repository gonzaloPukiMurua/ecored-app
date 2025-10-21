'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { FormContainer } from '@/components/ui/FormContainer/FormContainer'
import { FormLabel } from '@/components/ui/FormLabel/FormLabel'
import { FormInput } from '@/components/ui/FormInput/FormInput'
import { Button } from '@/components/ui/Button/Button'
import { CategoryService } from '@/services/category/category.service'
import styles from '../../listing/ListingForm/ListingForm.module.css'

export function CategoryForm() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = new FormData(e.currentTarget)

    const data = {
      name: form.get('name') as string,
      parent_category: form.get('parent_category') as string || null,
    }

    try {
      console.log('Category data:', data);
      const res = await CategoryService.create(data);
      console.log('Respuesta de API:', res);
      alert('Categoría creada exitosamente ✅');
      router.push('/home');
    } catch (err) {
      console.error(err);
      setError('Error al crear la categoría.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Crear nueva categoría</h2>

      <FormContainer onSubmit={handleSubmit}>
        {/* Nombre */}
        <div className={styles.fieldGroup}>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <FormInput id="name" name="name" placeholder="Ej: Electrónica" required />
        </div>

        {/* Categoría padre */}
        <div className={styles.fieldGroup}>
          <FormLabel htmlFor="parent_category">Categoría padre (opcional)</FormLabel>
          <FormInput
            id="parent_category"
            name="parent_category"
            placeholder="Ej: Tecnología"
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <Button type="submit" variant="default" disabled={loading}>
          {loading ? 'Creando...' : 'Guardar categoría'}
        </Button>
      </FormContainer>
    </div>
  )
}
