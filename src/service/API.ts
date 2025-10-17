import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { SessionCookieService } from "../service/SessionCookie"
import AuthService from "./Auth"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export function isTokenValid(token: string): boolean {
  if (!token) return true

  try {
    const decoded = jwtDecode(token)
    const now = Date.now() / 1000

    if (!decoded.exp) {
      return false
    }

    return decoded.exp > now
  } catch (error) {
    return false
  }
}

api.interceptors.request.use(
  async (config) => {
    const authService = new AuthService()
    config.headers = config.headers ?? {}

    const sessionCookies = new SessionCookieService()
    var authData = await sessionCookies.find()

    if (authData.success && authData.refreshToken && authData.accessToken) {
      if (!isTokenValid(authData.refreshToken)) {
        await sessionCookies.delete()

        return config
      }

      if (!isTokenValid(authData.accessToken)) {
        const response = await authService.refresh(authData.refreshToken)

        await sessionCookies.create(response)
        authData = { ...response, success: true }
      }

      config.headers["Authorization"] = `Bearer ${authData.accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api
