import './globals.css'
import type { Metadata } from 'next'
import {Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ 
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mir Građevinarstvo',
  description: '',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
        <head>
        <link rel='icon' href='/logo.svg'/>
      </head>
      <body className={montserrat.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
