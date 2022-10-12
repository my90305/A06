import { ControlOutlined } from '@ant-design/icons';
import iotApi from 'api/iot';
import type { NextApiRequest, NextApiResponse } from 'next'

<<<<<<< HEAD
export async function handler (req: NextApiRequest, res: NextApiResponse) {
  const result = await iotApi.spiritWorld.door(true)
  console.log(result)
  res.status(200).json({ response: 'test success', result })
=======
export async function handler (req: NextApiRequest, res: NextApiResponse,isOpen: boolean) {
  const result = await iotApi.spiritWorld.door(isOpen)
  console.log (result)
  res.status(200).json({response: 'test success'})
>>>>>>> a343a9d50bef58018f2c1af67b35be1d5a569c74
}

export default handler