import { fetchJson } from '@/lib/api'
import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

const { CMS_URL } = process.env
export default async function handlerUser(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { jwt } = req.cookies
  if (!jwt) {
    res.status(401).end()
    return
  }

  try {
    const user = await fetchJson(`${CMS_URL}/users/me`, {
      headers: { 'Authorization': `Bearer ${jwt}` },
    })
      return res.status(200).json({
          id: user.id,
          name: user.username
      });
  } catch (error) {
      
      return res.status(401).end();
  }
}
