import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import authRouter from './routes/auth';
import userRouter from './routes/userRouter'
import passport from 'passport';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.resolve('./frontend/dist/assets')));

// routers
app.use('/auth', authRouter);
app.use('/user', userRouter);

app.get('*', (req, res): void => {
  res.status(200).sendFile(path.resolve('dist/index.html'));
});

// catch all 404
app.use('*', (req, res) => {
  return res.status(404).send('The page you are looking for does not exist.');
});

// global error object
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  const defaultErr = {
    log: `GLOBAL ERROR HANDLER: caught unknown middleware error${err.toString()}`,
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  if (errorObj.log) console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} (っ^‿^)っ`);
});