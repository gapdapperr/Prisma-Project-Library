import { Book } from "./book";
import { Member } from "./member";

export interface Borrow {
  id: number;
  memberId: number;
  bookId: number;
  borrowDate: Date;
  dueDate: Date;
  returnDate: Date | null;
  member: Member;
  book: Book;
}