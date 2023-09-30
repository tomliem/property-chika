'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Options } from '@splidejs/splide'
import Image from 'next/image'
import Viewer from 'react-viewer'
import { useState } from 'react'

export const Section3 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <p className="text-primary-gold-yellow font-semibold px-4 sm:px-12 font-sans bg-primary-blue py-2 text-center mx-auto text-sm md:text-2xl">
        Crystal Boulevard merupakan area komersial yang terdekat dari Flyover K.H. Noer Ali sebagai akses utama menuju
        Summarecon Bekasi. Juga berada terdepan di area Landmark serta dekat Summarecon Mall Bekasi.
      </p>
      <div className="text-xl max-w-6xl mx-auto">
        <h1 className="text-center text-2xl font-bold mt-5 font-header">Best Business Property in BEKASI</h1>
        <div className="w-full mt-5">
          <Image src="/1.jpg" alt="P" className="w-full" width={1200} height={600} />

          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <Image
                onClick={() => setVisible(true)}
                src="/2.jpg"
                alt="Image Title"
                width={300}
                height={300}
                className="w-full"
              />
            </div>
            <div className="col-span-1">
              <Image
                onClick={() => setVisible(true)}
                src="/3.jpg"
                alt="Image Title"
                width={300}
                height={300}
                className="w-full"
              />
            </div>
            <div className="col-span-1">
              <Image
                onClick={() => setVisible(true)}
                src="/4.jpg"
                alt="Image Title"
                width={300}
                height={300}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <Viewer
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
          noNavbar
          images={[
            { src: `/1.jpg`, alt: '' },
            { src: `/2.jpg`, alt: '' },
            { src: `/3.jpg`, alt: '' },
            { src: `/4.jpg`, alt: '' },
          ]}
        />
      </div>
    </>
  )
}
