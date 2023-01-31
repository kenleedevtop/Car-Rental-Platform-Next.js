import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CUnprotectedRoutes, CProtectedRoutes } from 'constants/routes';
import { validateToken } from 'utilities/validate-token';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request: NextRequest) {
  const { pathname, locale, defaultLocale } = request.nextUrl;

  console.log('====================================');
  console.log(pathname);
  console.log('====================================');

  if (
    pathname.startsWith('/_next') || // exclude Next.js internals
    pathname.startsWith('/api') || //  exclude all API routes
    pathname.startsWith('/static') || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  ) {
    return NextResponse.next();
  }

  const loggedIn = await validateToken(request);
  const withLocale = locale === defaultLocale ? '' : `/${locale}`;

  const isProtectedRoute = CProtectedRoutes.includes(pathname);
  const isUnprotectedRoute = CUnprotectedRoutes.includes(pathname);

  if (loggedIn && !isProtectedRoute) {
    return NextResponse.redirect(new URL(`${withLocale}/`, request.url));
  }
  if (!loggedIn && !isUnprotectedRoute) {
    return NextResponse.redirect(new URL(`${withLocale}/login`, request.url));
  }
  return NextResponse.next();
}
