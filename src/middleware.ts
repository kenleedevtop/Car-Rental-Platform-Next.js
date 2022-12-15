import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CUnprotectedRoutes, CProtectedRoutes } from 'constants/routes';
import { validateToken } from 'utilities/validate-token';

export async function middleware(request: NextRequest) {
  const loggedIn = await validateToken(request);

  const isProtectedRoute = CProtectedRoutes.includes(request.nextUrl.pathname);
  const isUnprotectedRoute = CUnprotectedRoutes.includes(
    request.nextUrl.pathname
  );

  if (loggedIn && !isProtectedRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if (!loggedIn && !isUnprotectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: '/((?!.*\\.).*)' };
