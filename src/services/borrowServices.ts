import * as repo from "../repository/borrowRepository";


export function getBorrowByDueDate(dueDate: Date) {
  return repo.getBorrowByDueDate(dueDate);
}

export function getAllBorrow() {
  return repo.getAllBorrow();
}

export function addBorrow(bookId: number, memberId: number, dueDate: Date) {
  return repo.addBorrow(bookId, memberId, dueDate);
}