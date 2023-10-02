'use client'
import { FaWhatsappSquare } from 'react-icons/fa'

export const waUrl =
  'https://api.whatsapp.com/send?phone=62817799425&text=Halo%21%20saya%20ingin%20informasi%20Launching%20Perdana%20Crystal%20Boulevard%20Signature%20Commercial%20Bekasi%20'
const Whatsapp = () => {
  return (
    <div className="fixed bottom-4 right-4 z-30">
      <a href={waUrl} className="items-center flex flex-row cursor-pointer">
        <div className="text-white  py-1 px-2 bg-[#25D366] border-white border-y-4 border-l-4">
          <div className="text-xs lg:text-base font-normal font-sans">Contact Us</div>
        </div>
        <div className="bg-white rounded-lg">
          <FaWhatsappSquare size={70} color="#25D366" />
        </div>
      </a>
    </div>
  )
}
export default Whatsapp
