import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from '@/auth'
import { i18n } from '@/i18n.config'
import { PublicRoutes, AuthRoutes, RoutePath } from './constants/RoutePath'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// @ts-ignore locales are readonly
const locales: string[] = i18n.locales;

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  
  const languages = new Negotiator({headers: negotiatorHeaders}).languages();
  
  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  console.log('request', request)
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if(pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
};

// const authMiddleware = auth((req: NextRequest) => {
//   const { nextUrl } = req;
//   const isLoggedIn = !!req.auth;
//   const isPublicRoute = PublicRoutes.includes(nextUrl.pathname);
//   const isAuthRoute = AuthRoutes.includes(nextUrl.pathname);
//   if (isPublicRoute) {
//     return NextResponse.next();
//   }
//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       return NextResponse.redirect(new URL(RoutePath.Profile, nextUrl));
//     }
//     return NextResponse.next();
//   }
//   if (!isPublicRoute && !isLoggedIn) {
//     return NextResponse.redirect(new URL(RoutePath.Login, nextUrl));
//   }
//   return NextResponse.next();
// });

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}