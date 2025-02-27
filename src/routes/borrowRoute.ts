import express, { Request, Response } from 'express';
import {getBorrowByDueDate, getAllBorrow} from '../services/borrowServices';


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

export default router;  