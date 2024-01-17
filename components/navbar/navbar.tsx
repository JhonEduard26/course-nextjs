import Image from 'next/image'
import { NavLinks } from '..'
export const Navbar = () => {
  return (
    <header className="flex py-4 px-6">
      <nav className="flex items-center justify-between w-full">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={58}
          height={58}
        />
        <NavLinks />
        <button className="px-5 py-2.5 rounded-lg bg-[#f39c12] text-white hover:bg-[#d79d41]">
          Go to Home
        </button>
      </nav>
    </header>
  )
}
