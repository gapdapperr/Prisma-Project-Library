import * as repo from "../repository/bookRepository";


export function getAllBooks() {
  return repo.getAllBooks();
}

export async function getAllBooksWithPagination(keyword: string,pageSize: number, pageNo: number) {
  const pageBooks = await repo.getAllBooksWithPagination(keyword ,pageSize, pageNo);
  return pageBooks;
}

export function countBooks() {
  return repo.countBooks();
}

export function getBookById(id: number) {
  return repo.getBookById(id);
}

export function getBookByTitle(title: string) {
  return repo.getBookByTitle(title);
}

export function getBookNotReturned() {
  return repo.getBookNotReturned();
}

export function updateAvailability(id: number, isAvailable: boolean) {
  return repo.updateAvailability(id, isAvailable);
}