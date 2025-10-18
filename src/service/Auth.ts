import axios from "axios"

import api from "./API"
import { TLoginData, TLoginResponse, TRefreshResponse } from "./types"

export default class AuthService {
  async login(data: TLoginData): Promise<TLoginResponse> {
    const response = await api.post<TLoginResponse>("/user/auth", data)

    return response.data
  }

  async refresh(refreshToken: string): Promise<TRefreshResponse> {
    const response = await axios.post<TRefreshResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/user/auth/refresh`,
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    )

    return response.data
  }

  async logout(): Promise<boolean> {
    try {
      await api.patch("/user/logout")

      return true
    } catch (err) {
      return false
    }
  }
}
