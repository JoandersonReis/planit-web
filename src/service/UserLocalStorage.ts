import { CONFIG } from "@/utils/Config"
import { TUserLogin } from "./types"

export class UserLocalStorage {
  static save(data: TUserLogin) {
    localStorage.setItem(CONFIG.STORAGE.USER, JSON.stringify(data))
  }

  static find(): TUserLogin | null {
    const user = localStorage.getItem(CONFIG.STORAGE.USER)

    if (!user) return null

    return JSON.parse(user)
  }

  static delete() {
    localStorage.removeItem(CONFIG.STORAGE.USER)
  }
}
