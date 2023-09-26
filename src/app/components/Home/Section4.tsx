'use client'
import Image from 'next/image'
import BGImage from '@statics/cara-bayar.jpeg'

export const Section4 = () => {
  return (
    <div className="text-xl mt-10">
      <div className="text-center text-2xl font-bold">SITE PLAN DESIGN</div>
      <div className="w-full mt-5">
        <div className="max-w-5xl mx-auto">
          <Image src={BGImage} alt="P" className="w-full" />
        </div>
      </div>
    </div>
  )
}
