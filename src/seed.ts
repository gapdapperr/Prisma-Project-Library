import { createBooks } from "./db/createBooks";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

createBooks()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  