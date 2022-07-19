import type { NextApiRequest, NextApiResponse } from 'next'

const apiRouter = '192.168.137.240';
const host = '80';
const apiPrefix = `http://${apiRouter}:${host}`;

export async function getBoxESP8266 () {
  const response = await fetch(`${apiPrefix}`, {
    method: 'GET',
  })
  console.log(response)
}

export function handler (req: NextApiRequest, res: NextApiResponse) {
  getBoxESP8266()
  res.status(200).json({response: 'check API'})
}

export default handler