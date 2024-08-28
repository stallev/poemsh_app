'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

import { i18n } from '@/i18n.config'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const currentLocale = pathName.split('/')[1]

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <>
    {/* <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select> */}
      <ul className='flex gap-x-3'>
        {i18n.locales.map(locale => {
          return (
            <li key={locale}>
              <Link
                href={redirectedPathName(locale)}
                className='rounded-md border bg-black px-3 py-2 text-white'
              >
                {locale}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}