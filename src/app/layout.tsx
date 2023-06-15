import { Metadata } from 'next'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { Main } from '@/components/main/main'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Currencies App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='wrapper'>
          <Header/>
          <Main>
            {children}
          </Main>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
