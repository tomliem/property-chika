import Image from "next/image"
import LogoImage from '@statics/smblogo-r.png'

export const Logo = () => {
  return (
    <Image src={LogoImage} alt="Summarecon Bekasi" width={120} />
  )
}
