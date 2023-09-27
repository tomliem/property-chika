import { NavBar } from '@app/components/Layout/NavBar/NavBar'
import { Logo } from '@app/components/Logo/Logo'
import Image from 'next/image'

const Header = () => (
  <>
    <header className="w-full">
      <div className="bg-header-banner py-2 flex justify-center bg-no-repeat bg-cover">
        <a href="/" className="w-20 sm:w-32">
          <Logo />
          <div>{/* <span className="text-xs">Education for All</span> */}</div>
        </a>
      </div>
      <div className="py-4 px-2 sm:px-8 border border-t-stone-200">
        <NavBar />
      </div>
    </header>
  </>
)

export default Header
