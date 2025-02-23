import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function createBorrows() {
  await prisma.borrow.create({
    data: {
      memberId: 1,
      bookId: 1,
        borrowDate: new Date(),
        dueDate: new Date(),
        returnDate: new Date(),
        numberOfBorrowedBooks: 1,
    },
    
  });
    
    await prisma.borrow.create({
        data: {
        memberId: 1,
        bookId: 2,
            borrowDate: new Date(),
            dueDate: new Date(),
            returnDate: new Date(),
            numberOfBorrowedBooks: 1,
        },
    });
}