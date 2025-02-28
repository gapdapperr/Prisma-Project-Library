import express, { Request, Response } from 'express';
import {getBorrowByDueDate, getAllBorrow, addBorrow} from '../services/borrowServices';
import { getBookById, updateAvailability } from '../repository/bookRepository';

const router = express.Router();

// get all borrows

router.get('/', async (req: Request, res: Response) => {
    if (req.query.dueDate) {
        const dueDate = req.query.dueDate as string;
        const filteredBorrow = await getBorrowByDueDate(new Date(dueDate));
        res.json(filteredBorrow);
    } 
    else {
        const borrows = await getAllBorrow();
        res.json(borrows);
    }
});

// add a borrow

router.post('/', async (req: Request, res: Response) => {
    const { bookId, memberId, dueDate } = req.body;
    const book = await getBookById(bookId);
    if (book?.isAvailable === false) {
        res.status(400).json({ message: 'Book is not available' });
        return;
    }
    const borrow = await addBorrow(bookId, memberId, new Date(dueDate));
    await updateAvailability(bookId, false);
    res.json(borrow);
}
);

export default router;  