import dynamic from 'next/dynamic'

export const Whatsapp = dynamic(() => import('./Whatsapp').then((x) => x) as Promise<React.FC<unknown>>, { ssr: false })
