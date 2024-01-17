import Link from 'next/link'
import { ActiveLink } from '..'

const links = [
  { path: '/contact', text: 'Contact' },
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' }
]

export const Navbar = () => {
  return (
    <header className="flex py-4 px-6">
      <nav className="flex items-center justify-between w-full">
        <div>
          <Link
            href="/"
            className="font-semibold"
          >
            First Steps
          </Link>
        </div>
        <div>
          {
            links.map(link => (
              <ActiveLink key={link.path} {...link} />
            ))
          }
        </div>
        <button className="px-5 py-2.5 rounded-lg bg-[#f39c12] text-white hover:bg-[#d79d41]">
          Go to Home
        </button>
      </nav>
    </header>
  )
}
