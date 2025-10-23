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