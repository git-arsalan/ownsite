import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar' // importing Navbar components from Components folder
import './globals.css'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'M. ARSALAN AKHTAR',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {
        /*
        */
      }
      <head> 

      </head>
      <body>
      <Navbar/>
            
       
        {
        
        children
        
        }
        <Footer/>
        
      </body>
    </html>
  )
}
