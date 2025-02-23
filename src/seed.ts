import { } 
import { createBooks } from './db/createBooks';
import { createMembers } from './db/createMembers';
import { createBorrows } from './db/createBorrows';
import prisma from './prismaClient';

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