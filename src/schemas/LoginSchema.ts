import z from "zod"
import { EmailSchema } from "./GlobalSchema"

export const LoginSchema = z.object({
  email: EmailSchema,
  password: z.string().min(8, "Senha curta!"),
})

export type TLoginSchema = z.infer<typeof LoginSchema>
