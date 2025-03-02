import { PrismaClient } from '@prisma/client';
import type { PageBook } from '../models/book';

const prisma = new PrismaClient();


export function getAllBooks() {
  return prisma.book.findMany({include: {_count: {select: {borrows: true}},borrows: true}});
}

export async function getAllBooksWithPagination(keyword: string,pageSize: number, pageNo: number) {
  const where: any = {
    OR: [
      { title: { contains: keyword, mode: "insensitive"} },
      { category: { contains: keyword, mode: "insensitive"} },
      { author: {firstName: { contains: keyword, mode: "insensitive"}} },
      { borrows: {some: {member: {firstName: {contains: keyword, mode: "insensitive"}}}} }
    ]
  };
  
  const books = await prisma.book.findMany({
    where,
    skip: pageSize * (pageNo - 1),
    take: pageSize,
    select : {
      id: true,
      title: true,
      isbn: true,
      category: true,
      isAvailable: true,
      author: {
        select: {
          firstName: true,
          lastName: true,
          affiliation: true,
        },
      },
      borrows: {
        select: {
          borrowDate: true,
          dueDate: true,  
          returnDate: true,
          member: {
            select: {
              firstName: true,
              lastName: true,
              phoneNumber: true,
            },
          }


        }
      },
    }
});

const count = await prisma.book.count({where});
return {count, books} as PageBook;
}


export function countBooks() {
  return prisma.book.count();
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

export function updateAvailability(id: number, isAvailable: boolean) {
  return prisma.book.update({ where: { id }, data: { isAvailable } });
}