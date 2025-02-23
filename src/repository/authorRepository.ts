import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export function getAllAuthors() {
  return prisma.author.findMany();
}

export function getAuthorById(id: number) {
  return prisma.author.findUnique({ where: { id } });
}
