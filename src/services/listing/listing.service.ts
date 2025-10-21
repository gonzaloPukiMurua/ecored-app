import { axiosClient } from '@/libs/axiosClient'
import type { 
  CreateListingRequest, 
  ListingResponse,
} from './types'

export const ListingService = {

  async create(data: CreateListingRequest): Promise<ListingResponse> {
    const res = await axiosClient.post('/listing', data)
    return res.data
  },

  async getAll(): Promise<ListingResponse[]> {
    const res = await axiosClient.get('/listing');
    console.log("Este es el listado de listings: ", res);
    console.log("coso");
    return res.data.data;
  },

  async getById(listingId: string): Promise<ListingResponse> {
    const res = await axiosClient.get(`/listing/${listingId}`)
    return res.data
  },

  async update(listingId: string, data: Partial<CreateListingRequest>): Promise<ListingResponse> {
    const res = await axiosClient.patch(`/listing/${listingId}`, data)
    return res.data
  },

  async delete(listingId: string): Promise<{ message: string }> {
    const res = await axiosClient.delete(`/listing/${listingId}`)
    return res.data
  },
}
