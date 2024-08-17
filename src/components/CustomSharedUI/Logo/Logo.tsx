import React from 'react'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="#" className="flex items-center space-x-2" prefetch={false}>
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