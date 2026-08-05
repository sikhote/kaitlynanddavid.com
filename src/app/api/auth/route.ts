import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password === process.env.PASSWORD) {
    const response = NextResponse.json({ success: true });

    response.cookies.set('auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    });

    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
