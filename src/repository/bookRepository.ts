import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export function getAllBooks() {
  return prisma.book.findMany();
}

export function getBookById(id: number) {
  return prisma.book.findUnique({ where: { id } });
}

export function getBookByTitle(title: string) {
  return prisma.book.findFirst({ where: { title } });
}
