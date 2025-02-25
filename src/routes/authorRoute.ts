import express, { Request, Response } from 'express';
import {getAllAuthors, getAuthorById } from '../services/authorServices';


const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const authors = await getAllAuthors();
    res.json(authors);
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const author = await getAuthorById(id);
    res.json(author);
});

export default router;