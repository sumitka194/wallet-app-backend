import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import mongoSanitize from 'express-mongo-sanitize';

import config from './config';
import connectDB from './db';
import router from './router';
import errorHandler from './middlewares/errorHandler';
import logger from './middlewares/logger';

const { PORT } = config;
const app = express();

app.use(morgan('combined', {
  stream: { write: (message) => logger.info(message.trim()) },
}));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(mongoSanitize());

app.use(router);

app.use(errorHandler.errorFormatter);
app.use(errorHandler.errorHandler);

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
  })
  .catch(() => {
    console.log('Error connecting DB');
  });
