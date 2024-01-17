// import { resolve } from 'path'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const singUpForm = z.object({
  restaurantName: z.string(),
  menagerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})
type SingUpForm = z.infer<typeof singUpForm> // converte o tipo para o tipo inferido

export function SingUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SingUpForm>()

  const navigate = useNavigate()

  async function handleSingUp(data: SingUpForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Restaurante cadastrado com sucesso.', {
        action: {
          label: 'Fazer Login',
          onClick: () => navigate('/sing-in'),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar restaurante')
    }
  }

  return (
    <div className="p-8 ">
      <Button asChild variant="ghost" className="absolute right-4 top-8">
        {/* asChild é usado para passar um componente como filho */}
        <Link to="/sing-in" className="">
          Já tenho uma conta
        </Link>
      </Button>
      <Helmet title="Cadastro" />
      <title>Acessar Painel | Venadas</title>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tighter">
            Criar Conta
          </h1>
          <p className="text-sm text-muted-foreground">
            Seja um parceiro e comece suas vendas!
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleSingUp)}>
          <div className="space-y-2 ">
            <Label htmlFor="restaurantName">Nome do estabelecimento:</Label>
            <Input
              id="restaurantName"
              type="text"
              {...register('restaurantName')}
            />
          </div>

          <div className="space-y-2 ">
            <Label htmlFor="menagerName">Seu nome:</Label>
            <Input id="menagerName" type="text" {...register('menagerName')} />
          </div>

          <div className="space-y-2 ">
            <Label htmlFor="email">E-mail:</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>

          <div className="space-y-2 ">
            <Label htmlFor="phone">Telefone:</Label>
            <Input id="phone" type="text" {...register('phone')} />
          </div>
          <Button disabled={isSubmitting} type="submit" className="w-full">
            Finalizar Cadastro
          </Button>
          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            Ao continuar, você aceita com nossos{' '}
            <a className="underline underline-offset-4" href="#">
              termos de serviço
            </a>{' '}
            e{' '}
            <a className="underline underline-offset-4" href="#">
              política de privacidade
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
