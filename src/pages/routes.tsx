import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
import { Deashboard } from './app/deshboard'
import { SingIn } from './auth/singIn'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Deashboard /> }],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sing-in', element: <SingIn /> }],
  },
])
