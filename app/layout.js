import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './sidebar/page'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AKSES PRIMA',
  description: 'AKSES PRIMA',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navigation />
        <main className='ml-[300px] '>
          {children}
        </main>
        </body>
    </html>
  )
}
