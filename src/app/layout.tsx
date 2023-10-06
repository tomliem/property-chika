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
  const agent = (children as any)?.props?.childProp.segment;
  console.log(agent)
  return (
    <html lang="en">
      <head>
        <title>Summarecon Bekasi Crystal Boulevard</title>
        <meta name="description" content="Properti Bekasi, Cuan Property" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="kogJ_n0FfriIl6H16c5NRiqNSPvCZuLTSmto9WXrd_o" />
      </head>
      <body className="text-blue-site bg-white">
        <Header />
        <main className="bg-white min-h-[600px]">{children}</main>
        <div className="mt-10 sm:mt-20">
          <Footer agent={agent === '__PAGE__' ? 'ratina' : agent} />
        </div>
      </body>
    </html>
  )
}
