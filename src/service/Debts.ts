import api from "./API"

export class DebtsService {
  async pay(debtId: string, paid: boolean) {
    await api.patch("/debts/pay", {
      debtId,
      paid,
    })
  }
}
