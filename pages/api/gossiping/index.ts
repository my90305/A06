import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'

const apiPrefix = `http://${process.env.GOSSIPING_BOX_IP}:${process.env.GOSSIPING_BOX_HOST}`;


//更新資料庫機關狀態的紀錄的涵式
export async function updataLevelStatus () {
  const prisma =new PrismaClient()
  
  await prisma.level.update({
    where: {
      id: 4
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
  getBoxESP8266()
  updataLevelStatus()
  res.status(200).json({response: 'Gossiping Check API'})
}

export default handler