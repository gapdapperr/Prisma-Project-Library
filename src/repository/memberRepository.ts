import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export function getAllMembers() {
  return prisma.member.findMany({
    select: {
      id: true,
      memberCode: true,
      firstName: true,
      lastName: true,
      phoneNumber: true,
      _count: { select: { borrows: true } },
      borrows: {
        select: { book: true, dueDate: true, returnDate: true },
      },
    },
    orderBy: { id: "asc" },
  });
}

export function getMemberByMemberCode(memberCode: string) {
  return prisma.member.findFirst({ where: { memberCode } });
}

export function getMemberByFirstName(firstName: string) {
  return prisma.member.findFirst({ where: { firstName } });
}