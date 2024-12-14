import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hustle CRM - Door-to-Door Sales Management',
  description: 'Simple CRM for door-to-door sales teams and independent sales professionals',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full`}>
        {children}
      </body>
    </html>
  )
}