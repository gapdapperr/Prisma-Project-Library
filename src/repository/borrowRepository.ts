import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export function getBorrowByDueDate(dueDate: Date) {
  return prisma.borrow.findMany({ where: { dueDate }, select: { book: true }, orderBy: { bookId: "asc" } });
}

export function getAllBorrow() {
  return prisma.borrow.findMany({include: {book: true, member: true}});
}

export function addBorrow(bookId: number, memberId: number, dueDate: Date) {
  return prisma.borrow.create({ data: { bookId, memberId, dueDate, borrowDate: new Date() } });
}
