'use client'
import Image from 'next/image'
import BGImage from '@statics/sample-2.jpeg'
import Viewer from 'react-viewer'
import { useState } from 'react'

export const Section3 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="text-xl mt-10">
      <div className="text-center text-2xl font-bold">THE MASTERPLAN OF SUMMARECON CROWN GADING</div>
      <div className="w-full mt-5">
        <Image src={BGImage} alt="P" className="w-full" />

        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <Image onClick={() => setVisible(true)} src="/sample-3.jpg" alt="Image Title" width={300} height={300} className="w-full" />
          </div>
          <div className="col-span-1">
            <Image onClick={() => setVisible(true)} src="/sample-3.jpg" alt="Image Title" width={300} height={300} className="w-full" />
          </div>
          <div className="col-span-1">
            <Image onClick={() => setVisible(true)} src="/sample-3.jpg" alt="Image Title" width={300} height={300} className="w-full" />
          </div>
        </div>
      </div>
      <Viewer
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        noNavbar
        images={[{ src: `/sample-3.jpg`, alt: '' }, { src: `/sample-3.jpg`, alt: '' }, { src: `/sample-3.jpg`, alt: '' }]}
      />
    </div>
  )
}
