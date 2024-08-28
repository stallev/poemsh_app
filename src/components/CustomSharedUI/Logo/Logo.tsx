import React from 'react'
import Link from 'next/link'
import { slugSelector } from '@/lib/slugSelector'
import { RoutePath } from '@/constants/RoutePath'

export const Logo = ({ lang }: { lang: string }) => {
  return (
    <Link href={slugSelector(lang, RoutePath.Home)} className="flex items-center space-x-2" prefetch={false}>
      <MountainIcon className="h-6 w-6" />
      <span className="font-bold">Acme Inc</span>
    </Link>
  )
}

const MountainIcon = (props: any) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}