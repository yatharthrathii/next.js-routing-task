import { NextResponse } from 'next/server';
import { signToken } from '@/utils/auth';

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === 'test@example.com' && password === '123456') {
    const token = await signToken({ email });

    const response = NextResponse.json({ success: true });
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60, 
    });

    return response;
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
