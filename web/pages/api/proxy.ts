import iotApi from 'api/iot';
import type { NextApiRequest, NextApiResponse } from 'next'

export async function handler (req: NextApiRequest, res: NextApiResponse) {
  await iotApi.spiritWorld.door(false)
  res.status(200).json({response: 'test success'})
}

export default handler