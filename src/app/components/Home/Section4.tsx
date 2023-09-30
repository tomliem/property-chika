'use client'
import Image from 'next/image'
import { useState } from 'react'
import Viewer from 'react-viewer'

export const Section4 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="text-xl mt-10 max-w-6xl mx-auto">
      <div className="flex space-x-2 items-center">
        <div className="h-[2px] w-full bg-primary-dark-blue"></div>
        <div className="text-center text-2xl font-bold font-header whitespace-nowrap" id="site-plan">
          SITE PLAN DESIGN
        </div>
        <div className="h-[2px] w-full bg-primary-dark-blue"></div>
      </div>
      <div className="w-full mt-5">
        <div className="max-w-5xl mx-auto">
          <Image src="/site-plan.jpg" alt="P" className="w-full" width={2289} height={1650} />
        </div>
      </div>

      <Viewer
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        noNavbar
        images={[{ src: `/site-plan.jpg`, alt: '' }]}
      />
    </div>
  )
}
