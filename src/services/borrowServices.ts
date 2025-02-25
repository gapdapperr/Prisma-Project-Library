import * as repo from "../repository/borrowRepository";


export function getBorrowByDueDate(dueDate: Date) {
  return repo.getBorrowByDueDate(dueDate);
}

export function getAllBorrow() {
  return repo.getAllBorrow();
}

export function getBorrowNotReturned(returnDate: null) {
  return repo.getBorrowNotReturned(returnDate);
}
