import type { NextApiRequest, NextApiResponse } from 'next'

const apiPrefix = `http://${process.env.GOSSIPING_BOX_IP}:${process.env.GOSSIPING_BOX_HOST}`;

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