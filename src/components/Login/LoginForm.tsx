"use client"

import { useMessageContext } from "@/contexts/MessagesContext"
import { LoginSchema, TLoginSchema } from "@/schemas/LoginSchema"
import AuthService from "@/service/Auth"
import { SessionCookieService } from "@/service/SessionCookie"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, Loader2Icon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "../Button"
import { Form } from "../Form"

export default function LoginForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  })
  const authService = new AuthService()
  const navigation = useRouter()
  const sessionCookies = new SessionCookieService()
  const [isLoading, setIsLoading] = useState(false)
  const { onMessage } = useMessageContext()

  async function onSubmit(data: TLoginSchema) {
    setIsLoading(true)
    const response = await authService
      .login(data)
      .finally(() => setIsLoading(false))

    if (response.errors) {
      onMessage({
        text: "Email ou senha inválidos!",
        type: "WARNING",
      })

      return
    }

    onMessage({
      text: "Logado com sucesso",
      type: "SUCCESS",
    })

    await sessionCookies.create(response)
    navigation.push("/dashboard")
  }

  return (
    <Form.Root
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full max-w-[600px]"
    >
      <Form.Title>PAINEL</Form.Title>

      <div className="flex flex-col gap-4">
        <Form.InputLabel
          label="E-mail"
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <Form.InputLabelPassword
          name="password"
          register={register}
          error={errors.password?.message}
        />

        <Button disabled={isLoading}>
          {isLoading ? (
            <Loader2Icon className="animate-spin" size={18} />
          ) : (
            <CheckCircle size={18} />
          )}
          Entrar
        </Button>
      </div>
    </Form.Root>
  )
}
