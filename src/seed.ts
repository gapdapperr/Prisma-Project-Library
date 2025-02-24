import { createAuthors } from './db/createAuthors';
import { createBooks } from './db/createBooks';
import { createMembers } from './db/createMembers';
import { createBorrows } from './db/createBorrows';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await createAuthors();
  await createBooks();
  await createMembers();
  await createBorrows();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });