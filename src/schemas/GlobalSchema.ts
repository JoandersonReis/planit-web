import z from "zod"

const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

export const EmailSchema = z.email("Formato de e-mail inválido!")
export const PasswordSchema = z.regex(
  passwordRegex,
  "Senha deve conter caracteres especiais, letras maiusculas, minusculas e números!"
)
