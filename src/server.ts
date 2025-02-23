import express, { Request, Response } from 'express';
import bookRoute from './routes/bookRoute'
import authorRoute from './routes/authorRoute'
import memberRoute from './routes/memberRoute'
import borrowRoute from './routes/borrowRoute'
const app = express();
const port = 3000;

app.use(express.json());
app.use('/books', bookRoute);
app.use('/authors', authorRoute);
app.use('/members', memberRoute);
app.use('/borrows', borrowRoute);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});