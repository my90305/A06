import { PrismaClient } from '@prisma/client'
import { time, timeEnd } from 'console'

const prisma = new PrismaClient()

async function main() {
  await prisma.level.updateMany({
    where: {
      complete: true
    },
    data: {
      complete: false
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })