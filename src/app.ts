import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// application route
// app.use('/api');

// Test route
const test = async (req: Request, res: Response) => {
  res.send('Blog project server is running !');
};

app.get('/', test);

// Error handlers
app.use(globalErrorHandler);
app.use(notFound);

export default app;
