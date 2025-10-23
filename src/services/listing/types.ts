// Tipos basados en la entidad Listing del backend

import { CategoryResponse } from "../category/types"

export enum ItemCondition {
  NEW = 'nuevo',
  LIKE_NEW = 'como_nuevo',
  USABLE = 'usable',
  PARTS = 'repuestos',
}

export enum ListingStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  BLOCKED = 'blocked',
  DELIVERED = 'delivered',
}

export interface CreateListingRequest {
  title: string
  description: string
  category_id: string // Puede ser ID o nombre, depende del backend
  subcategory_id?: string
  item_condition: ItemCondition
  zone_text?: string
  lat?: number | null
  lng?: number | null
}

export interface ListingPhoto {
  url: string;
  position?: number; // opcional
}

export interface ListingResponse {
  listing_id: string;
  title: string;
  description: string;
  category: CategoryResponse;
  subcategory?: string;
  item_condition: ItemCondition;
  status: ListingStatus;
  zone_text?: string;
  lat?: number | null;
  lng?: number | null;
  created_at: string;
  updated_at: string;
  photos?: ListingPhoto[]; // <-- nuevo
}
