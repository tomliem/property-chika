import Image from 'next/image'
import { Section1 } from '@app/components/Home/Section1'
import { Section2, Section3New, Section4 } from '@app/components/Home'
import { waUrl } from 'src/constants/agent'

export default function Home() {
  return (
    <div className="mx-auto relative">
      <Section1 />
      <Section3New />
      <Section2 />
      <Section4 />
      <div className="mt-10 flex  bg-no-repeat bg-cover relative">
        <div className="bg-opacity-80 bg-primary-dark-blue w-full h-full absolute top-0 left-0 z-10"></div>
        <div className="py-10 w-full flex items-center flex-col z-20">
          <div className="mb-4 text-white font-bold text-xl">Info Harga dan Cara Pembelian</div>
          <a href={waUrl.ratina} className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-full transition-all text-white">
            Klik disini
          </a>
        </div>
      </div>
    </div>
  )
}
