import Project from 'constants/project';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const fetchResponse = await fetch(`${Project.apis.v1}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(req.body),
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });

    if (!fetchResponse.ok) {
      throw new Error('Fetch failed');
    }

    const setCookieHeader = fetchResponse.headers.get('set-cookie');
    res.setHeader('set-cookie', setCookieHeader as string);
    const data = await fetchResponse.json();

    console.log(setCookieHeader);

    return res.status(200).json(data);
  }
  res.status(404).json({ message: 'Bad Request' });
}
