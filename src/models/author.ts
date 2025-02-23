import { Book } from "./book"


export interface Author {
    id: number
    firstName: String
    lastName: String
    affiliation: String
    books: Book[]
}