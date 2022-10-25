const prisma = async () => {
    await fetch(`api/database`, {
    method: 'GET',
  })
}

export default prisma