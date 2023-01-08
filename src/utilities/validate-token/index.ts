import Project from 'constants/project';
import type { NextRequest } from 'next/server';

export const validateToken = async (req: NextRequest) => {
  try {
    const token = req.cookies.get('Authorization')?.value;
    if (!token) {
      throw 'Token not found'!;
    }

    const { user } = await fetch(`${Project.apis.v1}/auth/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((x) => x.json());

    if (!user) {
      throw 'Token not valid'!;
    }
    return true;
  } catch {
    if (req.cookies.has('Authorization')) {
      req.cookies.delete('Authorization');
    }
    return false;
  }
};
