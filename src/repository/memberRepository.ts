import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export function getAllMembers() {
  return prisma.member.findMany();
}

export function getMemberByMemberCode(memberCode: string) {
  return prisma.member.findFirst({ where: { memberCode } });
}

export function getMemberByFirstName(firstName: string) {
  return prisma.member.findFirst({ where: { firstName } });
}