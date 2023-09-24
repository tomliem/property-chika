'use client'
import { FaWhatsappSquare } from 'react-icons/fa'

const Whatsapp = () => {
  const waUrl =
    'https://api.whatsapp.com/send?phone=62817811515&text=Halo%21%20saya%20ingin%20informasi%20Launching%20Perdana%20Ruko%20Gading%20Bulevar%20Summarecon%20Crown%20Gading%20'
  return (
    <div className="fixed bottom-4 right-4 z-30">
      <a href={waUrl} className="items-center flex flex-row cursor-pointer">
        <div className="text-white bg-blue-site px-2 ">Pricelist</div>
        <FaWhatsappSquare size={60} />
      </a>
    </div>
  )
}
export default Whatsapp
