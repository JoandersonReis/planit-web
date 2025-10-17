import axios from "axios"
import { TTokensCookiesResponse, TTokensResponse } from "./types"

const isServer = typeof window === "undefined"

const internalAPI = axios.create({
  baseURL: isServer ? `${process.env.NEXT_PUBLIC_APP_URL}/api` : "/api",
  withCredentials: true,
})

export class SessionCookieService {
  async create(data: TTokensResponse) {
    const response = await internalAPI.post("/session", data)
  }

  async find(): Promise<TTokensCookiesResponse> {
    const response = await internalAPI.get<TTokensCookiesResponse>("/session")

    return response.data
  }

  async delete() {
    const response = await internalAPI.delete("/session")
  }
}
