import express, { Request, Response } from 'express';
import {getBorrowByDueDate, getBorrowNotReturned, getAllBorrow} from '../services/borrowServices';


const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    if (req.query.dueDate) {
        const dueDate = req.query.dueDate as string;
        const filteredBorrow = await getBorrowByDueDate(new Date(dueDate));
        res.json(filteredBorrow);
    } else if (req.query.returnDate === null) {
        const borrows = await getBorrowNotReturned(req.query.returnDate);
        res.json(borrows);
    } else {
        const borrows = await getAllBorrow();
        res.json(borrows);
    }
});

export default router;  