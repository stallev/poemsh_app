import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from '@/i18n.config'
import { PublicRoutes, AuthRoutes, RoutePath } from './constants/RoutePath'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

interface RouteConfig {
  pathnameWithoutLocale: string;
  locale: string;
  isLoggedIn: boolean;
}

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
  const { pathname } = request.nextUrl;
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (!pathnameHasLocale) {
    return redirectWithLocale(request, pathname);
  }
  
  const routeConfig = getRouteConfig(request, pathname);
  
  return handleAuthorization(request, routeConfig);
}

function redirectWithLocale(request: NextRequest, pathname: string): NextResponse {
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

function getRouteConfig(request: NextRequest, pathname: string): RouteConfig {
  const locale = pathname.split('/')[1];
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
  const isLoggedIn = !!request.cookies.get('authjs.session-token')?.value;
  
  return {
    pathnameWithoutLocale,
    locale,
    isLoggedIn
  };
}

function handleAuthorization(
  request: NextRequest, 
  { pathnameWithoutLocale, locale, isLoggedIn }: RouteConfig
): NextResponse {
  if (PublicRoutes.includes(pathnameWithoutLocale)) {
    return NextResponse.next();
  }
  
  if (AuthRoutes.includes(pathnameWithoutLocale)) {
    return isLoggedIn 
      ? NextResponse.redirect(new URL(`/${locale}/`, request.url))
      : NextResponse.next();
  }
  
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL(`/${locale}${RoutePath.Login}`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
