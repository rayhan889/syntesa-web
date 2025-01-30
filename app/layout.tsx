import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

import { Providers } from '@/components/Providers'

const rubik = Rubik({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Syntesa',
  description: 'UNESA RPL Laboratorium Website'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <html lang='en'>
        <body className={`${rubik.className} antialiased`}>
          <main>{children}</main>
        </body>
      </html>
    </Providers>
  )
}
