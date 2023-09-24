'use client'
import dynamic from 'next/dynamic'

export const Section3 = dynamic(() => import('./Section3').then((x) => x.Section3) as Promise<React.FC<unknown>>, {
  ssr: false,
})
