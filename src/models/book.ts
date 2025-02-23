import { Author } from "./author"
import { Borrow } from "./borrow"

export interface Book {
    id: number
    title: String
    isbn: String
    category: String
    authorId: number
    author: Author
    borrows: Borrow[]
}