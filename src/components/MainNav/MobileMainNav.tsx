'use client'
'use client'
import React from 'react'
import Link from 'next/link'
import { ChevronRight } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { MainNavBarLinks } from "@/constants/NavBarLinks"
import { slugSelector } from '@/lib/slugSelector'

export const MobileMainNav = ({ lang }: { lang: string }) => {
  const navContent = Object.values(MainNavBarLinks).map(({ link, label, children }, index) => {
    return !!link ? (
      <Link
        key={index}
        href={slugSelector(lang, link)}
        className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        <span>{label}</span>
      </Link>
    ) : (
      <Collapsible key={index}>
        <CollapsibleTrigger className="flex items-center justify-between font-medium">
          {label}
          <ChevronRight className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col pl-4 space-y-2">
          {Object.values(children).map((item, index) => (
            <Link key={index} href={slugSelector(lang, item.link)} prefetch={false}>
              {item.label}
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  });
  return (
    <div className="relative">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 space-y-4 p-4">
          <SheetHeader className='hidden'>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <SheetDescription className='hidden'>
            Use the menu below to navigate through the site sections.
          </SheetDescription>

          <nav className="space-y-2">
            {navContent}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

const MenuIcon = (props: any) => {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
