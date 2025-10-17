"use client"

import { createContext, ReactNode, useContext } from "react"
import { TUserContext } from "./types"

const UserContext = createContext({} as TUserContext)

type TUserContextProps = {
  children: ReactNode
}

export function UserProvider({ children }: TUserContextProps) {
  return (
    <UserContext.Provider
      value={{
        name: "Joanderson Reis",
        balance: 159385,
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
