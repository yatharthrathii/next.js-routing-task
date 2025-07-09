import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode('abcde');

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (err) {
    return null;
  }
}
