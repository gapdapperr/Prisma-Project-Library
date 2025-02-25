import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export function getBorrowByDueDate(dueDate: Date) {
  return prisma.borrow.findMany({ where: { dueDate } });
}

export function getBorrowNotReturned(returnDate: null) {
  return prisma.borrow.findMany({ where: { returnDate: null } });
}

export function getAllBorrow() {
  return prisma.member.findMany({
    select: {
      id: true,
      memberCode: true,
      firstName: true,
      lastName: true,
      phoneNumber: true,
      _count: { select: { borrows: true } },
      borrows: {
        select: { book: true,quantity: true, dueDate: true, returnDate: true },
      },
    },
    orderBy: { id: "asc" },
  });
}
