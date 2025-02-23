import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createBooks() {
  const books = [
    {
      title: "The Great Gatsby",
      isbn: "9780743273565",
      category: "Fiction",
      author: {
        connect: { id: 1 },
      },
    },
    {
      title: "The Catcher in the Rye",
      isbn: "9780316769488",
      category: "Fiction",
      author: {
        connect: { id: 2 },
      },
    },
  ];
  for (const book of books) {
    await prisma.book.create({
      data: {
        title: book.title,
        isbn: book.isbn,
        category: book.category,
        author: book.author,
      },
    });
  }
}
