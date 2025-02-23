import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export function getAllMembers() {
  return prisma.member.findMany();
}

export function getMemberById(id: number) {
  return prisma.member.findUnique({ where: { id } });
}

export function getMemberByFirstName(firstName: string) {
  return prisma.member.findFirst({ where: { firstName } });
}