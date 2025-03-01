import { Borrow } from "./borrow";

export interface Member {
  id: number;
  memberCode: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  borrows: Borrow[];
}