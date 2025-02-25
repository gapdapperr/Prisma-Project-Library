import express, { Request, Response } from 'express';
import {getAllBooks, getBookById, getBookByTitle} from '../services/bookServices';


const router = express.Router();

// get all books + get book by title

router.get('/', async (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title as string;
    const filteredBook = await getBookByTitle(title);
    res.json(filteredBook);
  } else {
    const books = await getAllBooks();
    res.json(books);
  }
});

// get book by id

router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const book = await getBookById(id);
  res.json(book);
});

export default router;