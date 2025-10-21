import { axiosClient } from '@/libs/axiosClient'

export interface CreateCategoryRequest {
  name: string,
  parent_category?: string | null
}

export interface CategoryResponse {
  category_id: string,
  name: string,
  active: boolean,
  parent_id?: string | null,
  created_at: string,
  updated_at: string,
}

export const CategoryService = {
  async create(data: CreateCategoryRequest): Promise<CategoryResponse> {
    const res = await axiosClient.post('/category', data)
    return res.data
  },

  async getAll(): Promise<CategoryResponse[]> {
    const res = await axiosClient.get('/category');
    console.log("Esto devuelve la API: ", res);
    console.log("dentro de data: ", res.data);
    console.log("Mas dentro de data", res.data.data);
    return res.data.data;
  },
}
