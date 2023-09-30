'use client'
import dynamic from 'next/dynamic'

export const Section2 = dynamic(() => import('./Section2').then((x) => x.Section2) as Promise<React.FC<unknown>>, {
  ssr: false,
})
export const Section3New = dynamic(() => import('./Section3New').then((x) => x.Section3New) as Promise<React.FC<unknown>>, {
  ssr: false,
})
export const Section4 = dynamic(() => import('./Section4').then((x) => x.Section4) as Promise<React.FC<unknown>>, {
  ssr: false,
})
