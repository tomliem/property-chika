import Image from 'next/image'
import BGImage from '@statics/sample-1.jpeg'
import { useState } from 'react'
import Viewer from 'react-viewer'

export const Section2 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="text-xl mt-10 max-w-6xl mx-auto" id="floor-plan">
      <div className="text-center font-bold text-2xl font-header">FLOOR PLAN DESIGN</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 px-5 sm:px-24 mt-5 gap-5">
        <div className="col-span-1 mx-auto">
          <div className="font-bold text-primary-gold-yellow mb-2">1. Facade</div>
          <Image src='/floor.jpg' alt="P" width={300} height={620} />
          
        </div>
        <div className="col-span-1 mx-auto">
          <div className="font-bold text-primary-gold-yellow mb-2">2. Facade Signature</div>
          <Image src="/floor-s.jpg" alt="P" width={300} height={620} />
          
        </div>

        <div className="col-span-1 mx-auto">
          <div className="font-bold text-primary-gold-yellow mb-2">3. Facade Signature Hoek</div>
          <Image src="/floor-hoek-s.jpg" alt="P" width={300} height={620} />
          
        </div>

        <Viewer
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
          noNavbar
          images={[
            { src: `/floor.jpg`, alt: '' },
            { src: `/floor-s.jpg`, alt: '' },
            { src: `/floor-hoek-s.jpg`, alt: '' },
          ]}
        />
      </div>
    </div>
  )
}
