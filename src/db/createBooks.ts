import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createBooks() {
  const books = [
    {
      title: "The Great Gatsby",
      isbn: "9780743273565",
      category: "Fiction",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "The Catcher in the Rye",
      isbn: "9780316769488",
      category: "Fiction",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "To Kill a Mockingbird",
      isbn: "9780061120084",
      category: "Fiction",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "1984",
      isbn: "9780451524935",
      category: "Dystopian",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "Pride and Prejudice",
      isbn: "9781503290563",
      category: "Romance",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "The Hobbit",
      isbn: "9780547928227",
      category: "Fantasy",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "Moby Dick",
      isbn: "9781503280786",
      category: "Adventure",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "War and Peace",
      isbn: "9781400079988",
      category: "Historical",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "The Odyssey",
      isbn: "9780140268867",
      category: "Epic",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "Crime and Punishment",
      isbn: "9780486415871",
      category: "Psychological",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "The Brothers Karamazov",
      isbn: "9780374528379",
      category: "Philosophical",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "Brave New World",
      isbn: "9780060850524",
      category: "Dystopian",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "Jane Eyre",
      isbn: "9780141441146",
      category: "Romance",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "Wuthering Heights",
      isbn: "9780141439556",
      category: "Gothic",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "The Divine Comedy",
      isbn: "9780142437223",
      category: "Epic",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "The Iliad",
      isbn: "9780140275360",
      category: "Epic",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "The Aeneid",
      isbn: "9780143106296",
      category: "Epic",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "Les Misérables",
      isbn: "9780451419439",
      category: "Historical",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "Don Quixote",
      isbn: "9780060934347",
      category: "Adventure",
      author: {
        connect: { id: getRandomAuthorId() },
      },
    },
    {
      title: "The Alchemist",
      isbn: "9780061122415",
      category: "Adventure",
      author: {
        connect: { id: getRandomAuthorId() },
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


function getRandomAuthorId() {
  return Math.floor(Math.random() * 18) + 1;
}