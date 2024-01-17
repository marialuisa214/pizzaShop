// import { resolve } from 'path'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const singInForm = z.object({
  email: z.string().email(),
})
type SingInForm = z.infer<typeof singInForm> // converte o tipo para o tipo inferido

export function SingIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SingInForm>()

  async function handleSingIn(data: SingInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Link de autenticação enviado para seu e-mail.', {
        action: {
          label: 'Reenviar link',
          onClick: () => handleSingIn(data),
        },
      })
    } catch {
      toast.error('Credenciais inválidas')
    }
  }

  return (
    <div className="p-8 ">
      <Helmet title="Login" />
      <title>Acessar Painel | Venadas</title>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tighter">
            Acessar Painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas Venadas pelo painel do parceiro
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleSingIn)}>
          <div className="space-y-2 ">
            <Label htmlFor="email">E-mail</Label>
            <Input
              placeholder="Seu E-mail aqui"
              id="email"
              type="email"
              {...register('email')}
            />
          </div>
          <Button disabled={isSubmitting} type="submit" className="w-full">
            Acessar Painel
          </Button>
        </form>
      </div>
    </div>
  )
}
