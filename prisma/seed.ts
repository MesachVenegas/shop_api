
import bcrypt from 'bcryptjs';
import prisma from "../src/lib/prisma";


async function main() {
  const password = await bcrypt.hash(String(process.env.ADMIN_PASSWORD), 10)

  const user = await prisma.user.upsert({
    where: { username: 'meshdev' },
    update: {},
    create: {
      avatar_url: '',
      username: 'meshdev',
      name: 'mesach',
      last_name: "venegas",
      password: password,
      role: 'admin',
      is_active: true,
    }
  })

  if (user) {
    console.log(`User created with id: ${user.id}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })