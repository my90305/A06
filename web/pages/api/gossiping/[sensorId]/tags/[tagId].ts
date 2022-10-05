import type { NextApiRequest, NextApiResponse } from 'next'
import { getBoxESP8266 } from '../../../gossiping/index'
import { updataLevelStatus } from '../../../gossiping/index'

const CORRECT_LIST = [
  { id: 0, sensorId: '0', tagId: '163157131167' },
  { id: 1, sensorId: '1', tagId: '677094167' },
  { id: 2, sensorId: '2', tagId: '2296120173' }, 
]

let checkedArray = [false, false, false]
const isAllChecked = () => checkedArray.findIndex((item) => item === false) < 0

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sensorId = req.query.sensorId as string;

  const tagId = req.query.tagId as string;


  for (const item of CORRECT_LIST) {
    if (item &&
      item.sensorId === sensorId &&
      item.tagId === tagId) {
      checkedArray[item.id] = true;
      if (isAllChecked()) {
        console.log('yeeee');
        getBoxESP8266();
        updataLevelStatus();
      }
      return res.status(201).json({ success: 'true', sensorId, tagId, checkedArray, isAllChecked: isAllChecked() })
    }
  }


  return res.status(200).json({ error: 'Not this card' })
}
