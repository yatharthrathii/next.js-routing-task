import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';

const secret = new TextEncoder().encode('abcde');

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === 'admin@example.com' && password === 'password') {
    const token = await new SignJWT({ email })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('2h')
      .sign(secret);

    const res = NextResponse.json({ success: true });
    res.cookies.set('token', token, {
      httpOnly: true,
      path: '/',
    });

    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
