import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.SourceCreateInput[] = [
  {
    id: '530753ff-ff5e-4542-bc17-a32438b7b5e3',
    name: 'Foo',
    authorId: '530753ff-ff5e-4542-bc17-a32438b7b5e3',
    tree: {
      create: {
        id: '530753ff-ff5e-4542-bc17-a32438b7b5e3',
        name: 'Family Foo',
        slug: 'family-foo',
        currentChange: {
          create: {
            id: '530753ff-ff5e-4542-bc17-a32438b7b5e3',
            commandName: 'command foo',
            data: '{ foo: "foo" }'
          }
        }
      }
    }
  }
]

async function main() {
  console.log('Start seeding ...')
  for (const u of userData) {
    const user = await prisma.source.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log('Seeding finished.')
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
