'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const links = [
  {
    path: '/',
    text: 'Home'
  },
  {
    path: '/contact',
    text: 'Contact'
  },
  {
    path: '/about',
    text: 'About'
  },
  {
    path: '/pricing',
    text: 'Pricing'
  }
]

export const NavLinks = () => {
  const path = usePathname()

  return (
    <ul className="flex gap-x-6">
      {
        links.map((link) => (
          <li key={link.path}>
            <Link className={clsx('hover:text-[#f39c12]', {
              'text-[#f39c12]': path === link.path
            })} href={link.path}>
              {link.text}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
