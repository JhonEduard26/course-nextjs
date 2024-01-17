import Image from 'next/image'
import Link from 'next/link'

export default function Navbar () {
  return (
    <header className="flex py-4 px-6 border-b border-b-slate-900">
      <nav className="flex items-center justify-between w-full">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={58}
          height={58}
        />
        <ul className="flex gap-4">
          <li>
            <Link className="hover:text-[#f39c12]" href="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-[#f39c12]" href="/contact">Contact</Link>
          </li>
          <li>
            <Link className="hover:text-[#f39c12]" href="/about">About</Link>
          </li>
          <li>
            <Link className="hover:text-[#f39c12]" href="/pricing">Pricing</Link>
          </li>
        </ul>
        <button className="px-5 py-2.5 rounded-lg bg-[#f39c12] text-white hover:bg-[#d79d41]">
          Go to Home
        </button>
      </nav>
    </header>
  )
}
