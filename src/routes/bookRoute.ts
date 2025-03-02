import express, { Request, Response } from 'express';
import {getAllBooks, getBookById, getBookByTitle, getBookNotReturned, getAllBooksWithPagination, countBooks} from '../services/bookServices';


const router = express.Router();

// get all books + get book by title

router.get('/', async (req: Request, res: Response) => {
  // if (req.query.title) {
  //   const title = req.query.title as string;
  //   const filteredBook = await getBookByTitle(title);
  //   if (!filteredBook) {
  //     res.status(404).json({ message: 'Book not found' });
  //     return;
  //   }
  //   res.json(filteredBook);
  // } else {
  //   const books = await getAllBooks();
  //   if (books.length === 0) {
  //     res.status(404).json({ message: 'No books found' });
  //     return;
  //   }
  //   res.json(books);
  // }


    const pageSize = parseInt(req.query.pageSize as string) || 10
    const pageNo = parseInt(req.query.pageNo as string) || 1
    const keyword = req.query.keyword as string || ''
    try {
    const result = await getAllBooksWithPagination(keyword, pageSize, pageNo);
      if (result.books.length === 0) {
        res.status(404).json({ message: 'No books found' });
        return;
      }
    res.setHeader('X-Total-Count', result.count.toString());
    res.json(result.books);
    } catch (error) {
      if (pageNo < 1 || pageSize < 1) {
        res.status(400).send({ message: 'Invalid page number or page size' });
      } else {
      res.status(500).send("Internal Server Error");
      } 
      return 
    }
    finally {
      console.log(`Request is completed. with pageNo=${pageNo} and pageSize=${pageSize}`);
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