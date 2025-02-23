import express, { Request, Response } from 'express';
import {getBorrowByDueDate, getBorrowNotReturned} from '../services/borrowServices';
import type { Book } from '../models/book';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    if (req.query.dueDate) {
        const dueDate = req.query.dueDate as string;
        const filteredBorrow = await getBorrowByDueDate(new Date(dueDate));
        res.json(filteredBorrow);
    } else {
        const borrows = await getBorrowNotReturned();
        res.json(borrows);
    }
});

export default router;  