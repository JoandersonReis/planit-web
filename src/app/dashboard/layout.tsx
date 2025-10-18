import { Dashboard } from "@/components/Dashboard"
import { isTokenValid } from "@/service/API"
import { CONFIG } from "@/utils/Config"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

type TLayout = {
  children: ReactNode
}

export default async function RootLayout({ children }: TLayout) {
  const cookieStore = await cookies()
  const sessionData = JSON.parse(
    String(cookieStore.get(CONFIG.COOKIES.SESSION)?.value || "{}")
  )

  if (!sessionData.refreshToken || !isTokenValid(sessionData.refreshToken)) {
    redirect("/login")
  }

  return (
    <div className="flex-1 ">
      <Dashboard.Header />

      {children}
    </div>
  )
}
