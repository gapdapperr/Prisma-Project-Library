import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export function getBorrowByDueDate(dueDate: Date) {
  return prisma.borrow.findMany({ where: { dueDate } });
}

export function getBorrowByReturnDate(returnDate: Date) {
  return prisma.borrow.findMany({ where: { returnDate } });
}

export function getBorrowNotReturned() {
  return prisma.borrow.findMany({ where: { returnDate: null } });
}
