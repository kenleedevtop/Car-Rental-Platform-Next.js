import type { NextRequest } from 'next/server';

export const validateToken = async (req: NextRequest) => {
  try {
    const cookie = req.cookies.get('x-auth-token');
    if (!cookie) {
      throw "Cookie doesn't exist!";
    }
    return true;
  } catch {
    return false;
  }
};
