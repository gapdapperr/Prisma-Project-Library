import express, { Request, Response } from 'express';
import {getAllBooks, getBookById, getBookByTitle, getBookNotReturned} from '../services/bookServices';


const router = express.Router();

// get all books + get book by title

router.get('/', async (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title as string;
    const filteredBook = await getBookByTitle(title);
    if (!filteredBook) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    res.json(filteredBook);
  } else {
    const books = await getAllBooks();
    if (books.length === 0) {
      res.status(404).json({ message: 'No books found' });
      return;
    }
    res.json(books);
  }
});

// get not returned books

router.get('/not-returned', async (req: Request, res: Response) => {
  const books = await getBookNotReturned();
  if (books.length === 0) {
    res.status(404).json({ message: 'No books found' });
    return;
  }
  res.json(books);
});

// get book by id

router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const book = await getBookById(id);
  if (!book) {
    res.status(404).json({ message: 'Book not found' });
    return;
  }
  res.json(book);
});


export default router;