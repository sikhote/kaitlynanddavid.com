import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  if (
    request.nextUrl.hostname === 'registry.kaitlynanddavid.com' ||
    request.nextUrl.pathname === '/auth' ||
    request.nextUrl.pathname === '/api/auth'
  ) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get('auth');

  if (!authCookie || authCookie.value !== 'authenticated') {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|assets).*)'],
};
