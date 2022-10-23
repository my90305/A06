import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const apiPrefix = `http://${process.env.Ouija_Broad_BOX_IP}:${process.env.Ouija_Broad_BOX_HOST}`;

//更新資料庫機關狀態的紀錄的涵式
export async function updataLevelStatus () {
  const prisma = new PrismaClient()
  
  await prisma.level.update({
    where: {
      id: 3
    },
    data: {
      complete: true
    }
  })
}

//向該機關的寶相發出開啟訊號的涵式
export async function getBoxESP8266 () {
  const response = await fetch(`${apiPrefix}`, {
  method: 'GET',
  })
  console.log(response)
}

export function handler (req: NextApiRequest, res: NextApiResponse) {
  updataLevelStatus()
  getBoxESP8266()
  res.status(200).json({ response: 'Ouija_Broad Check API' })
}
  
export default handler