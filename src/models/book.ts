import type { Author } from "./author"
import type { Borrow } from "./borrow"

export interface Book {
    id: number
    title: string
    isbn: string
    category: string
    authorId: number | null
    isAvailable: boolean
    author: Author | null
    borrows: Borrow[]
}

export interface PageBook {
    count: number;
    books: Book[];
}

