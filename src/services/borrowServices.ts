import * as repo from "../repository/bookRepository";


export function getBorrowByDueDate(dueDate: Date) {
    return repo.getBorrowByDueDate(dueDate);
  }
  
  export function getBorrowByReturnDate(returnDate: Date) {
    return repo.getBorrowByReturnDate(returnDate);
  }
  
  export function getBorrowNotReturned() {
    return repo.getBorrowNotReturned();
  }
  