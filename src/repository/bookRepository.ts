import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export function getAllBooks() {
  return prisma.book.findMany({include: {_count: {select: {borrows: true}},borrows: true}});
}

export function getBookById(id: number) {
  return prisma.book.findUnique({ where: { id } });
}

export function getBookByTitle(title: string) {
  return prisma.book.findFirst({ where: { title } });
}

export function getBookNotReturned() {
  return prisma.book.findMany({where: {borrows: {some: {returnDate: null}}},orderBy: {id: 'asc'}});
}