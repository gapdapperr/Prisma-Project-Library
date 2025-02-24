import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function createBorrows() {
  const borrows = [
    {
      book: {
        connect: { id: 1 },
      },
      member: {
        connect: { id: 1 },
      },
      borrowDate: new Date(),
      returnDate: new Date(),
    },
    {
      book: {
        connect: { id: 2 },
      },
      member: {
        connect: { id: 2 },
      },
      borrowDate: new Date(),
      returnDate: new Date(),
    },
  ]
  for (const borrow of borrows) {
    await prisma.borrow.create({
      data: {
        book: borrow.book,
        member: borrow.member,
        borrowDate: borrow.borrowDate,
        dueDate: randomDueDate(),
        returnDate: borrow.returnDate,
        quantity: Math.floor(Math.random() * 3) + 1,
      },
    });
  }
};



function randomDueDate(): Date {
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + Math.floor(Math.random() * 30) + 1);
  return dueDate;
}