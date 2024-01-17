import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { NavLink } from './navLink'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-5 w-5" />
        <Separator orientation="vertical" className="h-6" />

        <nav className=" flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/" className="text-sm font-medium text-foreground">
            <Home className="h-4 w-4" />
            Inicio
          </NavLink>

          <NavLink to="/ouders" className="text-sm font-medium text-foreground">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
