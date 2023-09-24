import Image from "next/image"
import LogoImage from '@statics/202332.png'

export const Logo = () => {
  return (
    <Image src={LogoImage} alt="Logo Remax" width={230} />
  )
}
