'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  path: string
  text: string
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname()

  return (
    <Link
      className={clsx('mr-6 hover:text-[#f39c12]', {
        'text-[#f39c12]': pathName === path
      })}
      href={path}
    >
      {text}
    </Link>
  )
}
