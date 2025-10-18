"use client"

import { TUserLogin } from "@/service/types"
import { UserLocalStorage } from "@/service/UserLocalStorage"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { TUserContext } from "./types"

const UserContext = createContext({} as TUserContext)

type TUserContextProps = {
  children: ReactNode
}

export function UserProvider({ children }: TUserContextProps) {
  const [user, setUser] = useState<TUserLogin>()
  const [debtsPaidTotal, setDebtsPaidTotal] = useState(0)

  useEffect(() => {
    const user = UserLocalStorage.find()

    if (user) {
      setUser(user)
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        name: user?.name || "",
        balance: Number(user?.balance) || 0,
        onUser: setUser,
        debtsPaidTotal,
        onDebtsPaidTotal: setDebtsPaidTotal,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserContext)

  return context
}
