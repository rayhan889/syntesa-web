'use client'
import { KindeProvider } from '@kinde-oss/kinde-auth-nextjs'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <KindeProvider>{children}</KindeProvider>
}
