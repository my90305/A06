import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//將所有機關在資料庫的狀態重設回初始狀態
async function init() {
  await prisma.level.updateMany({
    where: { complete: true },
    data: { complete: false }
  })
}

init()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })