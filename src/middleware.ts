import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CUnprotectedRoutes, CProtectedRoutes } from 'constants/routes';
import Project from 'constants/project';

const PUBLIC_FILE = /\.(.*)$/;

const checkLoggedIn = async () => {
  try {
    const res = await fetch(`${Project.apis.v1}/pingAuth`, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });

    console.log(res.headers);

    const a = await res.json();

    console.log(a);

    if (!res.ok) {
      throw new Error('Bad ping');
    }

    return true;
  } catch {
    return false;
  }
};

export const middleware = async (request: NextRequest) => {
  const { pathname, locale, defaultLocale } = request.nextUrl;

  if (
    pathname.startsWith('/_next') || // exclude Next.js internals
    pathname.startsWith('/api') || //  exclude all API routes
    pathname.startsWith('/static') || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  ) {
    return NextResponse.next();
  }

  const loggedIn = await checkLoggedIn();

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
};
