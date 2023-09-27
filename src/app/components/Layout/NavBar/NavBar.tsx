'use client'
import { NavLink } from './NavLink'
import { useCallback, useState } from 'react'
import type { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

const navbarItems = [
  { ref: '/', label: 'Home' },
  { ref: '/#projects', label: 'Projects' },
]

const StyledNavLink = ({
  isActive,
  className,
  ...linkProps
}: LinkProps & {
  isActive: boolean
  children: React.ReactNode
  className?: string
}) => (
  <NavLink
    className={`${className ?? ''} ${isActive ? 'text-primary-blue' : 'hover:text-primary-dark-blue'}`}
    {...linkProps}
  />
)

export function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState(false)
  const pathname = usePathname()
  const [linkRef, setLinkRef] = useState<LinkProps['href']>(pathname!)
  const toggleOpen = useCallback(() => setIsMenuShown(!isMenuShown), [isMenuShown])
  return (
    <>
      <nav
        className={`transition-all duration-500 ease-in-out md:block overflow-hidden  max-md:animate-sideways-once `}
      >
        <ul className="flex items-center flex-row gap-10 md:gap-4 min-[900px]:gap-5 lg:gap-12 justify-center text-sm md:text-[15px] leading-[22px]">
          {navbarItems.map(({ ref, label }) => (
            <li key={ref} className="relative text-base font-semibold">
              <StyledNavLink
                isActive={ref === linkRef}
                href={ref}
                onClick={() => {
                  setLinkRef(ref)
                  setIsMenuShown(false)
                }}
              >
                {label}
              </StyledNavLink>
              <span className="absolute -bottom-5 md:hidden border-b-2 w-48 left-[calc(50%_-_theme(space.24))]" />
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
