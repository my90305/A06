import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const nameTable = ["A", "B"]//機關傳送的req尚未確定，先用A、B代替
const prisma = new PrismaClient()

//解讀收到的req並且更新資料庫對應機關狀態
export function handler (req: NextApiRequest, res: NextApiResponse) {
  const reqName = req.query.name as string;

  for(const item of nameTable) {
    if(reqName === item) {
      prisma.level.updateMany({
        where: { complete: false },
        data: { complete: true }
      })
    }
  }

  //Respond
  let levelStatus = prisma.level.findMany()
  res.status(200).json({response: 'Got it!', reqName, levelStatus})
}