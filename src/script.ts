import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.source.findFirst({
    where: {
      id: "530753ff-ff5e-4542-bc17-a32438b7b5e3"
    },
    include: { tree: { include: { currentChange: true } } },
  });
  console.log("result", result)
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