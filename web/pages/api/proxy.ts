import iotApi from 'api/iot';
import type { NextApiRequest, NextApiResponse } from 'next'

const door = async function (isOpen: boolean) {
  const result = await iotApi.spiritWorld.door(isOpen)
  console.log (result)
}

const handler = {
  door
}

export default handler;