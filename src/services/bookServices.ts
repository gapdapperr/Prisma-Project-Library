import * as repo from "../repository/bookRepository";


export function getAllBooks() {
  return repo.getAllBooks();
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