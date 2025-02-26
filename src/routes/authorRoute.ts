import express, { Request, Response } from 'express';
import {getAllAuthors, getAuthorById } from '../services/authorServices';


const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const authors = await getAllAuthors();
    if (authors.length === 0) {
        res.status(404).json({ message: 'No authors found' });
        return;
    }
    res.json(authors);
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const author = await getAuthorById(id);
    if (!author) {
        res.status(404).json({ message: 'Author not found' });}
    res.json(author);
});

export default router;