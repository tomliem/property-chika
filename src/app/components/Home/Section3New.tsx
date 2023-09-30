'use client'
import Image from 'next/image'
import Viewer from 'react-viewer'
import { useState } from 'react'
import { useInterval } from 'react-use'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs/'

const arrayImages = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg']
export const Section3New = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [pause, setPause] = useState(false)
  useInterval(() => {
    if (!pause) setActiveIdx((prevIdx) => (prevIdx + 1) % 6)
  }, 3500)

  useInterval(() => {
    if (pause) setPause(false)
  }, 8000)

  return (
    <>
      <p className="text-primary-gold-yellow font-semibold px-4 sm:px-12 font-sans bg-primary-blue py-2 text-center mx-auto text-sm md:text-2xl">
        Crystal Boulevard merupakan area komersial yang terdekat dari Flyover K.H. Noer Ali sebagai akses utama menuju
        Summarecon Bekasi. Juga berada terdepan di area Landmark serta dekat Summarecon Mall Bekasi.
      </p>
      <div className="text-xl max-w-6xl mx-auto">
        <h1 className="text-center text-2xl font-bold mt-5 font-header">Best Business Property in BEKASI</h1>
        <div className="w-full mt-5">
          <div className="transition-all relative">
            <Image src={arrayImages[activeIdx]} alt="P" className="w-full" width={1200} height={600} />
            <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-2">
              <div
                className="rounded-full bg-primary-dark-blue p-2 cursor-pointer"
                onClick={() => {
                  setActiveIdx((prevIdx) => (prevIdx - 1 + 6) % 6);
                  setPause(true)
                }}
              >
                <BsChevronLeft color="white" />
              </div>
              <div
                className="rounded-full bg-primary-dark-blue p-2 cursor-pointer"
                onClick={() => {
                  setActiveIdx((prevIdx) => (prevIdx + 1) % 6)
                  setPause(true)
                }}
              >
                <BsChevronRight color="white" />
              </div>
            </div>
          </div>

          <div className="grid gap-2 grid-cols-2 md:grid-cols-3 mt-2">
            {arrayImages.map((x, idx) => {
              return (
                <div className="col-span-1 cursor-pointer" onClick={() => {
                  setActiveIdx(idx)
                  setPause(true)
                }}>
                  <Image src={x} alt="Image Title" width={300} height={300} className="w-full" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
