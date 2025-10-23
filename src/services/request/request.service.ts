// src/services/request/request.service.ts

import { axiosClient } from '@/libs/axiosClient';
import type {
  CreateRequestDto,
  UpdateRequestDto,
  RequestResponse,
  PaginatedRequestResponse,
} from './types';

export const RequestService = {

  async create(data: CreateRequestDto): Promise<RequestResponse> {
    const res = await axiosClient.post('/request', data);
    return res.data;
  },

  async getAll(
    page = 1,
    limit = 10,
    order: 'ASC' | 'DESC' = 'DESC',
    status?: string
  ): Promise<PaginatedRequestResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      order,
      ...(status ? { status } : {}),
    });

    const res = await axiosClient.get(`/request?${params.toString()}`);
    return res.data;
  },

  async getById(requestId: string): Promise<RequestResponse> {
    const res = await axiosClient.get(`/request/${requestId}`);
    return res.data;
  },

  async update(requestId: string, data: UpdateRequestDto): Promise<RequestResponse> {
    const res = await axiosClient.put(`/request/${requestId}`, data);
    return res.data;
  },

  async delete(requestId: string): Promise<{ message: string }> {
    const res = await axiosClient.delete(`/request/${requestId}`);
    return res.data;
  },
};
