"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ListItem } from "../CustomSharedUI/ListItem/ListItem";
import { MainNavBarLinks } from "@/constants/NavBarLinks"
import { slugSelector } from "@/lib/slugSelector";
import { Session } from "next-auth";

export const MainNav = ({ lang, session }: { lang: string, session: Session | null }) => {
  const navContent = Object.values(MainNavBarLinks)
    .filter((item) => {
      if(!!session) {
        return item.isUnauthorised === !session
      }
      return item;
    })
    .map(({ link, label, children }, index) => {
      return !!link ? (
        <NavigationMenuItem key={index}>
          <Link href={slugSelector(lang, link)} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {label}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ) : (
        <NavigationMenuItem key={index}>
          <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4 md:w-[300px]">
              {Object.values(children).map((item, index) => (
                <ListItem
                  key={index}
                  title={item.label}
                  href={item.link}
                  lang={lang}
                >
                  {item.label}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      )
    });

  return (
    <NavigationMenu className='hidden md:block'>
      <NavigationMenuList>
        {navContent}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
