"use client"

import { useUserContext } from "@/contexts/UserContext"
import AuthService from "@/service/Auth"
import { SessionCookieService } from "@/service/SessionCookie"
import { UserLocalStorage } from "@/service/UserLocalStorage"
import { ConvertCentsToReal } from "@/utils/ConvertCentsToReal"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { Dashboard } from "."
import { Header } from "../Header"

export default function DashboardHeader() {
  const { name, balance } = useUserContext()
  const navigation = useRouter()
  const authService = new AuthService()
  const sessionService = new SessionCookieService()

  async function handleLogout() {
    const response = await authService.logout()

    if (response) {
      sessionService.delete()
      UserLocalStorage.delete()

      navigation.push("/login")
    }
  }

  return (
    <Header.Root className="bg-dark-gray">
      <Header.Container className="flex items-center-safe justify-between">
        <Dashboard.SideMenu />

        <div className="flex items-center gap-2 font-sans">
          <div>
            <div className="flex flex-col items-end">
              <span className="text-xs">SALDO</span>
              <span className="text-light-gray text-xs">
                {ConvertCentsToReal(String(balance))}
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="!h-8 w-8 !rounded-full flex-center border-2 border-white text-white bg-gradient-to-r to-primary from-secondary text-2xl !p-0 cursor-pointer"
          >
            <LogOut size={16} />
          </button>
        </div>
      </Header.Container>
    </Header.Root>
  )
}
