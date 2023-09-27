'use client'
import Image from 'next/image'

export const Section4 = () => {
  return (
    <div className="text-xl mt-10">
      <div className="text-center text-2xl font-bold">SITE PLAN DESIGN</div>
      <div className="w-full mt-5">
        <div className="max-w-5xl mx-auto">
          <Image src="/site-plan.jpg" alt="P" className="w-full" width={2289} height={1650} />
        </div>
      </div>
    </div>
  )
}