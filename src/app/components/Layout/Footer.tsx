import './footer.css'
import { Logo } from '@app/components/Logo/Logo'
import { Whatsapp } from '@app/components/Whatsapp'

const Footer = () => (
  <footer className="m-h-56 leading-7 sm:p-14 font-site">
    <div className="flex flex-col sm:flex-row">
      <div className="basis-1/3 bg-blue-site text-white p-14 sm:pl-24">
        <h2 className="text-2xl sm:text-3xl font-bold">Remax Solitaire</h2>
        <div className="flex flex-col sm:flex-row text-sm font-helvetica">
          <div className="border-b border-white pb-4">
            <p className="mt-10 font-bold">Agen Real Estate Pilihan Indonesia</p>
            <p className="mt-10">
              Jl. Kelapa Nias Raya QE1/14 <br />
              Kelapa Gading Jakarta Utara - 14240 Indonesia
            </p>
            <p className="mt-10">Phone: +62 214 515 551</p>
            {/* <p className="mt-10">Registered Charity: 12345-67</p> */}
          </div>
        </div>
        <h3 className="text-xl lg:text-4xl mt-10">solitaire@remax.co.id</h3>
      </div>
      <div className="basis-2/3 bg-gray-200 p-14 text-justify hidden lg:block">
        RE/MAX (NYSE: RMAX) hadir di Indonesia pada tahun 2014 dan memulai revolusi mental kepercayaan dalam transaksi
        property. RE/MAX hadir di 115 negara dan wilayah dengan kekuatan jaringan lebih dari 8,300 kantor dan 135,000.
        RE/MAX didirikan berdasarkan mimpi, di mana dalam setiap pertemuan, agennya akan memberikan layanan terbaik dan
        mencapai hasil maksimal. Melalui mimpi ini, industri properti telah berubah selamanya. RE/MAX percaya pada
        konsep maksimum. Ketika dikombinasikan dengan pelatihan kelas dunia dan keunggulan teknologi, itu akan menarik
        dan menjadi alat yang kuat untuk agen (MA) dan pemilik bisnis (BO) yang sangat efisien dan sangat termotivasi
        untuk berhasil. Pada awal pertumbuhannya, RE/MAX berkembang pesat di Amerika Serikat dan Kanada dengan pangsa
        pasar lebih dari 40%. Selain itu, jaringan RE/MAX telah melampaui batas dan benua, dan telah diterima dan sangat
        dipercaya di banyak negara. Sekarang RE/MAX telah tumbuh menjadi pembangkit tenaga listrik real estat global
        dengan kehadiran di lebih dari 115 negara dan wilayah, lebih dari 8,300 kantor dan didukung oleh lebih dari
        125.000 rekanan pemasaran tepercaya.
      </div>
    </div>
    <div className="mx-auto text-center sm:text-xs mt-6">
      <Logo />
      <p className="font-default mb-10">© 2023 Remax Solitaire.</p>
    </div>
    <Whatsapp />
  </footer>
)

export default Footer
