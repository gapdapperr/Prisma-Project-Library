import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function createBorrows() {
  for (let i = 0; i < 20; i++) {
    await prisma.borrow.create({
      data: {
        book: {
          connect: { id: randomBookId() },
        },
        member: {
          connect: { id: randomMemberId() },
        },
        borrowDate: randomBorrowDate(),
        dueDate: randomDueDate(),
        returnDate: randomReturnDate()
      },
    });
  }
}

function randomBorrowDate(): Date {
  const borrowDate = new Date();
  borrowDate.setDate(borrowDate.getDate() - Math.floor(Math.random() * 30));
  return borrowDate;
}

function randomDueDate(): Date {
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + Math.floor(Math.random() * 30) + 1);
  return dueDate;
}

function randomReturnDate(): Date | null {
  const chanceOfNull = Math.random();
  if (chanceOfNull < 0.5) {
    return null;
  }
  return new Date();
}

function randomBookId(): number {
  return Math.floor(Math.random() * 20) + 1;
}

function randomMemberId(): number {
  return Math.floor(Math.random() * 25) + 1;
}