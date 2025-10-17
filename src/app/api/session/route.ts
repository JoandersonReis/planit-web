"use server"

import { TTokensCookiesResponse, TTokensResponse } from "@/service/types"
import { CONFIG } from "@/utils/Config"

import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = (await request.json()) as TTokensResponse
  const cookieStore = await cookies()

  cookieStore.set({
    name: CONFIG.COOKIES.SESSION,
    value: JSON.stringify(data),
    sameSite: "lax",
  })

  return NextResponse.json({ success: true })
}

export async function GET(): Promise<NextResponse<TTokensCookiesResponse>> {
  const cookieStore = await cookies()

  const authData = cookieStore.get(CONFIG.COOKIES.SESSION)

  if (!authData) {
    return NextResponse.json({ success: false })
  }

  return NextResponse.json({ ...JSON.parse(authData.value), success: true })
}

export async function DELETE() {
  const cookieStore = await cookies()

  cookieStore.delete(CONFIG.COOKIES.SESSION)

  return NextResponse.json({ success: true })
}
