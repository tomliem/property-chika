import './globals.css'
import type { Metadata } from 'next'
import Footer from '@app/components/Layout/Footer'
import Header from '@app/components/Layout/Header'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { waUrl } from 'src/constants/agent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Summarecon Bekasi - Crystal Boulevard',
  description: 'The next best property opportunities in Bekasi',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const agent = (children as any)?.props?.childProp.segment as keyof typeof  waUrl;
  return (
    <html lang="en">
      <head>
        <title>Summarecon Bekasi Crystal Boulevard</title>
        <meta name="description" content="Properti Bekasi, Cuan Property" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="text-blue-site bg-white">
        <Header />
        <main className="bg-white min-h-[600px]">{children}</main>
        <div className="mt-10 sm:mt-20">
          <Footer agent={agent} />
        </div>
      </body>
    </html>
  )
}
