import Image from "next/image"
import BGImage from '@statics/bg-image.jpeg'

export const Section1 = () => {
  return (
    <Image src={BGImage} alt="Logo Remax" className="w-full" />
  )
}
