'use client'

import * as React from 'react'
import { FormContainer } from '@/components/ui/FormContainer/FormContainer'
import { FormLabel } from '@/components/ui/FormLabel/FormLabel'
import { FormInput } from '@/components/ui/FormInput/FormInput'
import { Button } from '@/components/ui/Button/Button'
import { useRouter } from 'next/navigation'
import { ListingService } from '@/services/listing'
import { CategoryService, CategoryResponse } from '@/services/category/category.service'
import { ItemCondition } from '@/services/listing/types'
import styles from './ListingForm.module.css'

// Enumeraciones basadas en el backend
const itemConditions = [
  { value: 'nuevo', label: 'Nuevo' },
  { value: 'como_nuevo', label: 'Como nuevo' },
  { value: 'usable', label: 'Usable' },
  { value: 'repuestos', label: 'Para repuestos' },
]

export function ListingForm() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [categories, setCategories] = React.useState<CategoryResponse[]>([])

  // 🔹 Traer categorías al montar el componente
  React.useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await CategoryService.getAll();
        console.log("Estas son las categorias: ", res)
        setCategories(res);
      } catch (err) {
        console.error('Error cargando categorías:', err);
      }
    }
    fetchCategories();
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = new FormData(e.currentTarget)

    const data = {
      title: form.get('title') as string,
      description: form.get('description') as string,
      category_id: form.get('category') as string,
      item_condition: form.get('item_condition') as ItemCondition,
      zone_text: form.get('zone_text') as string,
      lat: parseFloat(form.get('lat') as string) || null,
      lng: parseFloat(form.get('lng') as string) || null,
    }

    try {
      const res = await ListingService.create(data)
      console.log("Respuesta de API:", res)
      alert('Publicación creada exitosamente ✅')
      router.push('/home')
    } catch (err) {
      console.error(err)
      setError('Error al crear la publicación.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Crear nueva publicación</h2>

      <FormContainer onSubmit={handleSubmit}>
        {/* Título */}
        <div className={styles.fieldGroup}>
          <FormLabel htmlFor="title">Título</FormLabel>
          <FormInput id="title" name="title" placeholder="Ej: Bicicleta usada" required />
        </div>

        {/* Descripción */}
        <div className={styles.fieldGroup}>
          <FormLabel htmlFor="description">Descripción</FormLabel>
          <textarea
            id="description"
            name="description"
            className={styles.textarea}
            placeholder="Describe el estado del producto, uso, detalles, etc."
            required
          />
        </div>

        {/* Categoría (select dinámico) */}
        <div className={styles.fieldGroup}>
          <FormLabel htmlFor="category">Categoría</FormLabel>
          <select id="category" name="category" required className={styles.select}>
            <option value="">Seleccionar categoría...</option>
            {categories.map((cat) => (
              <option key={cat.category_id} value={cat.category_id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
            
        {/* Subcategoría */}
        {/*<div className={styles.fieldGroup}>
          <FormLabel htmlFor="subcategory">Subcategoría (opcional)</FormLabel>
          <FormInput id="subcategory" name="subcategory" placeholder="Ej: Bicicletas" />
        </div>*/}

        {/* Estado del ítem */}
        <div className={styles.fieldGroup}>
          <FormLabel htmlFor="item_condition">Condición</FormLabel>
          <select id="item_condition" name="item_condition" required className={styles.select}>
            <option value="">Seleccionar...</option>
            {itemConditions.map((cond) => (
              <option key={cond.value} value={cond.value}>
                {cond.label}
              </option>
            ))}
          </select>
        </div>

        {/* Ubicación */}
        <div className={styles.fieldGroup}>
          <FormLabel htmlFor="zone_text">Zona / Referencia</FormLabel>
          <FormInput id="zone_text" name="zone_text" placeholder="Ej: Córdoba Capital" />
        </div>

        <div className={styles.coordRow}>
          <div>
            <FormLabel htmlFor="lat">Latitud</FormLabel>
            <FormInput id="lat" name="lat" type="number" step="any" placeholder="-31.4201" />
          </div>
          <div>
            <FormLabel htmlFor="lng">Longitud</FormLabel>
            <FormInput id="lng" name="lng" type="number" step="any" placeholder="-64.1888" />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <FormLabel htmlFor="files">Fotos / Imágenes</FormLabel>
          <input
            id="files"
            name="files"
            type="file"
            multiple
            accept="image/*"
            className={styles.fileInput}
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <Button type="submit" variant="default" disabled={loading}>
          {loading ? 'Creando...' : 'Publicar'}
        </Button>
      </FormContainer>
    </div>
  )
}
