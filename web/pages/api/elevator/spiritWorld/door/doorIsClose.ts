const spiritWorldDoorIp = `http://${process.env.SPIRIT_WORLD_DOOR_IP}`;
import iotApi from 'api/iot';
import type { NextApiRequest, NextApiResponse } from 'next'

export async function getDoor () {
  const response = await fetch(`${spiritWorldDoorIp}/door?=0`, {
  method: 'GET',
  })
  console.log(response)
}

export async function handler (req: NextApiRequest, res: NextApiResponse, isOpen: boolean) {
  getDoor()
  res.status(200).json({response: 'test success'})
}

export default handler