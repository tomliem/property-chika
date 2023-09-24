import { NavBar } from '@app/components/Layout/NavBar/NavBar'
import { Logo } from '@app/components/Logo/Logo'

const Header = () => (
  <>
    <header className="w-full my-6 px-2 sm:px-8">
      <div className="flex sm:px-6 h-header sm:items-center sm:gap-4">
        <h2 className="flex-1">
          <a href="/" className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <Logo />
            <div>
              <span className="block font-site">Choose Quality</span>
              {/* <span className="text-xs">Education for All</span> */}
            </div>
          </a>
        </h2>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  </>
)

export default Header
