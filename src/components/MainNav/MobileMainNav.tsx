import React from 'react'
import Link from 'next/link'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Logo } from '../CustomSharedUI/Logo/Logo'

export const MobileMainNav = () => {
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
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <SheetDescription>
            Use the menu below to navigate through the site sections.
          </SheetDescription>

          <div className="flex items-center space-x-2">
            <Logo />
          </div>
          <nav className="space-y-2">
            <Link
              href="#"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              {/* <InfoIcon className="h-5 w-5" /> */}
              <span>About</span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex w-full items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {/* <LayersIcon className="h-5 w-5" /> */}
                    <span>Features</span>
                  </div>
                  {/* <ChevronRightIcon className="h-5 w-5" /> */}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    {/* <BarChartIcon className="h-5 w-5" /> */}
                    <span>Analytics</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    {/* <PuzzleIcon className="h-5 w-5" /> */}
                    <span>Integrations</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <LockIcon className="h-5 w-5" />
                    <span>Security</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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

const LockIcon = (props: any) => {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
