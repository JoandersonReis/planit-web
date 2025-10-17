export type TDebt = {
  id: string
  commit: string
  title: string
  paid: boolean
  value: string
  repeat: boolean
}

export type TDayData = {
  date: string
  debts: TDebt[]
}

export type TStatisticsResponse = {
  debts: {
    debtsDays: TDayData[]
    debtsTotal: number
    debtsCount: number
  }
}

export type TLoginData = {
  email: string
  password: string
}

export type TTokensResponse = {
  accessToken: string
  refreshToken: string
}

export type TTokensCookiesResponse = {
  success: boolean
  accessToken?: string
  refreshToken?: string
}

export type TUserLogin = {
  name: string
  balance: string
}

export type TLogin = TTokensResponse & {
  user: TUserLogin
}

export type TRefreshResponse = TTokensResponse

export type TLoginResponse = TLogin & TErrorResponse
