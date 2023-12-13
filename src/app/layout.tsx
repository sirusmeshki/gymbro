import './globals.css'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

import Navigation from '@/layout/Navigation'

import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Dana = localFont({
  src: [
    { path: './font/DanaVF.ttf' },
    { path: './font/DanaVF.woff2' },
    { path: './font/DanaVF.woff' },
  ],
})

export const metadata: Metadata = {
  title: 'GymBro | جیم برو',
  description: 'پلتفرم ساخت برنامه ورزشی',
}

export const viewport: Viewport = {
  themeColor: '#C9E4DE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={Dana.className}
      lang='fa'>
      <body className='flex h-full w-full flex-col overflow-x-hidden'>
        <ToastContainer
          bodyClassName={Dana.className}
          position='top-right'
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnHover
          theme='light'
          transition={Slide}
        />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
