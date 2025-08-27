import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Agar URL me uppercase hai to lowercase kar do
  if (pathname !== pathname.toLowerCase()) {
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Ye middleware har route pe chalega
export const config = {
  matcher: '/:path*',
};