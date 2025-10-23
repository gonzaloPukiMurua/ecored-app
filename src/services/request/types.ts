// src/services/request/types.ts

export enum RequestStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
}

export interface RequestUser {
  user_id: string;
  name: string;
  email: string;
}

export interface RequestListing {
  listing_id: string;
  title: string;
  description?: string;
  category?: string;
  photos?: { url: string }[];
}

export interface RequestResponse {
  request_id: string;
  listing: RequestListing;
  requester: RequestUser;
  status: RequestStatus;
  created_at: string;
  updated_at: string;
}

export interface CreateRequestDto {
  listing_id: string;
}

export interface UpdateRequestDto {
  status: RequestStatus;
}

export interface PaginatedRequestResponse {
  data: RequestResponse[];
  total: number;
  page: number;
  limit: number;
}
