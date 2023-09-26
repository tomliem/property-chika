import Image from 'next/image'
import BGImage from '@statics/sample-1.jpeg'

export const Section2 = () => {
  return (
    <div className="text-xl mt-10">
      <div className="text-center font-bold text-2xl">FLOOR PLAN DESIGN</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 px-5 sm:px-24 mt-5 gap-5">
        <div className="col-span-1">
          <Image src={BGImage} alt="P" />
          <div className="font-bold text-green-600 mt-2">1. Facade</div>
          <p className="text-base">
            Rumah klasik modern di sisi danau yang di desain oleh arsitek kenamaan Hadiprana, merupakan Masterpiece dari
            Summarecon Crown Gading dan memiliki Attic Room yang sangat berkelas.
          </p>
        </div>
        <div className="col-span-1">
          <Image src={BGImage} alt="P" />
          <div className="font-bold text-green-600 mt-2">2. Facade Signature</div>
          <p className="text-base">
            Rumah klasik modern di sisi danau yang di desain oleh arsitek kenamaan Hadiprana, merupakan Masterpiece dari
            Summarecon Crown Gading dan memiliki Attic Room yang sangat berkelas.
          </p>
        </div>

        <div className="col-span-1">
          <Image src={BGImage} alt="P" />
          <div className="font-bold text-green-600 mt-2">3. Facade Signature Hoek</div>
          <p className="text-base">
            Rumah klasik modern di sisi danau yang di desain oleh arsitek kenamaan Hadiprana, merupakan Masterpiece dari
            Summarecon Crown Gading dan memiliki Attic Room yang sangat berkelas.
          </p>
        </div>
      </div>
    </div>
  )
}
