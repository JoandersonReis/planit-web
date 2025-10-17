import { isTokenValid } from "@/services/API"
import AuthService from "@/services/Auth"
import { TTokensResponse } from "@/services/types"
import { CONFIG } from "@/utils/config"
import { cookies } from "next/headers"

export async function useAuthentication() {
  const sessionCookie = await cookies()
  const sessionString = sessionCookie.get(CONFIG.COOKIES.SESSION)?.value
  var session = JSON.parse(sessionString || "") as TTokensResponse
  const authService = new AuthService()

  async function getSession() {
    if (!session) {
      return null
    }

    if (!isTokenValid(session.refreshToken)) {
      return null
    }

    if (!isTokenValid(session.accessToken)) {
      const refresh = await authService.refresh(session.refreshToken)

      return refresh.data.refreshSession
    }

    return session
  }

  return {
    getSession,
  }
}
