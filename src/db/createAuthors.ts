import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createAuthors() {
  const authors = [
    {
      firstName: "F. Scott",
      lastName: "Fitzgerald",
      affiliation: "American",
    },
    {
      firstName: "J.D.",
      lastName: "Salinger",
      affiliation: "American",
    }
  ];
  for (const author of authors) {
    await prisma.author.create({
      data: {
        firstName: author.firstName,
        lastName: author.lastName,
        affiliation: author.affiliation,
      },
    });
  }
}