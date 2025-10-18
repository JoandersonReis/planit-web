"use client"

import { Card } from "@/components/Dashboard/Card"
import LoginForm from "@/components/Login/LoginForm"
import { isTokenValid } from "@/service/API"
import { SessionCookieService } from "@/service/SessionCookie"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Login() {
  const navigation = useRouter()
  const sessionCookies = new SessionCookieService()

  async function verifyCookies() {
    try {
      const response = await sessionCookies.find()

      if (response.refreshToken && isTokenValid(response.refreshToken)) {
        navigation.push("/dashboard")
      }
    } catch (err) {}
  }

  useEffect(() => {
    verifyCookies()
  }, [])

  return (
    <div className="flex-1 flex-center p-4">
      <Card.Root className="max-w-[600px]">
        <LoginForm />
      </Card.Root>
    </div>
  )
}
