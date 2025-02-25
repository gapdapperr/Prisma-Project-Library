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
    },
    {
      firstName: "George",
      lastName: "Orwell",
      affiliation: "British",
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      affiliation: "British",
    },
    {
      firstName: "Mark",
      lastName: "Twain",
      affiliation: "American",
    },
    {
      firstName: "Charles",
      lastName: "Dickens",
      affiliation: "British",
    },
    {
      firstName: "Ernest",
      lastName: "Hemingway",
      affiliation: "American",
    },
    {
      firstName: "Leo",
      lastName: "Tolstoy",
      affiliation: "Russian",
    },
    {
      firstName: "Fyodor",
      lastName: "Dostoevsky",
      affiliation: "Russian",
    },
    {
      firstName: "Gabriel",
      lastName: "Garcia Marquez",
      affiliation: "Colombian",
    },
    {
      firstName: "Harper",
      lastName: "Lee",
      affiliation: "American",
    },
    {
      firstName: "Herman",
      lastName: "Melville",
      affiliation: "American",
    },
    {
      firstName: "J.K.",
      lastName: "Rowling",
      affiliation: "British",
    },
    {
      firstName: "J.R.R.",
      lastName: "Tolkien",
      affiliation: "British",
    },
    {
      firstName: "Virginia",
      lastName: "Woolf",
      affiliation: "British",
    },
    {
      firstName: "James",
      lastName: "Joyce",
      affiliation: "Irish",
    },
    {
      firstName: "Franz",
      lastName: "Kafka",
      affiliation: "Austrian",
    },
    {
      firstName: "Homer",
      lastName: "Simpson",
      affiliation: "Greek",
    },
    {
      firstName: "William",
      lastName: "Shakespeare",
      affiliation: "British",
    },
    {
      firstName: "Emily",
      lastName: "Bronte",
      affiliation: "British",
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