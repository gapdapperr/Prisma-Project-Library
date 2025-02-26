import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export function getBorrowByDueDate(dueDate: Date) {
  return prisma.borrow.findMany({ where: { dueDate }, select: { book: true }, orderBy: { bookId: "asc" } });
}

export function getAllBorrow() {
  return prisma.borrow.findMany({include: {book: true, member: true}});
}
