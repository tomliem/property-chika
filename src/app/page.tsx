import Image from 'next/image'
import { Section1 } from '@app/components/Home/Section1'
import { Section2 } from '@app/components/Home/Section2'
import { Section3 } from '@app/components/Home'
import { Section4 } from './components/Home/Section4'

export default function Home() {
  const waUrl =
    'https://api.whatsapp.com/send?phone=62817811515&text=Halo%21%20saya%20ingin%20informasi%20Launching%20Perdana%20Ruko%20Gading%20Bulevar%20Summarecon%20Crown%20Gading%20'

  return (
    <div className="mx-auto relative">
      <Section1 />
      <Section3 />
      <Section2 />
      <Section4 />
      <div className="mt-10 flex  bg-no-repeat bg-cover relative">
        <div className="bg-opacity-80 bg-primary-dark-blue w-full h-full absolute top-0 left-0 z-10"></div>
        <div className="py-10 w-full flex items-center flex-col z-20">
          <div className="mb-4 text-white font-bold text-xl">Info Harga dan Stok Unit Terupdate</div>
          <a href={waUrl} className="rounded-sm px-4 py-2 bg-green-800 hover:bg-green-900 transition-all text-white">
            Klik disini
          </a>
        </div>
      </div>
    </div>
  )
}
