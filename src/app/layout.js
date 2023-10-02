import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemecontextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import Footer from '@/components/footer/Footer'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemecontextProvider>
            <ThemeProvider>
              <div className='container'>
                <div className='wrapper'>
                  <Navbar/>
                  {children}
                  <Footer/>
                </div>
              </div>
            </ThemeProvider>
          </ThemecontextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
