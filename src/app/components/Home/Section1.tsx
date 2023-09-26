import Image from "next/image"
import MainBanner from '@statics/banner-utama.png'

export const Section1 = () => {
  return (
    <Image src={MainBanner} alt="Banner Utama" className="w-full" />
  )
}
