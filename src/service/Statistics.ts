import api from "./API"
import { TStatisticsResponse } from "./types"

export class StatisticsService {
  async find(month: number): Promise<TStatisticsResponse> {
    const response = await api.get<TStatisticsResponse>(`/statistics/${month}`)

    return response.data
  }
}
