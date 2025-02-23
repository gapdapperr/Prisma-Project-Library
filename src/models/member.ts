import { Borrow } from "./borrow"


export interface Member {
    id: number
    memberCode: String
    firstName: String
    lastName: String
    phoneNumber: String
    borrows: Borrow[]
}