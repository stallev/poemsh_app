'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export const MobileMainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };
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
            <Link
              href="#"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <span>About</span>
            </Link>
            <Collapsible open={isOpen} onOpenChange={toggleCollapsible}>
              <CollapsibleTrigger className="flex items-center justify-between font-medium">
                Products
                {isOpen ? <IoIosArrowDown className="h-4 w-4" /> : <IoIosArrowForward className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="flex flex-col pl-4 space-y-2">
                <Link href="#" prefetch={false}>
                  Category A
                </Link>
                <Link href="#" prefetch={false}>
                  Category B
                </Link>
                <Link href="#" prefetch={false}>
                  Category C
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Link
              href="#"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              {/* <CreditCardIcon className="h-5 w-5" /> */}
              <span>Pricing</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <MailIcon className="h-5 w-5" />
              <span>Contact</span>
            </Link>
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

const MailIcon = (props: any) => {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
