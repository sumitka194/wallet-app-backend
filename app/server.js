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
import { setup, serve, router as swaggerDocRouter } from './swaggerDoc';

const { PORT } = config;
const app = express();

app.use(morgan('combined', {
  skip: (req, res) => res.statusCode < 400,
  stream: { write: (message) => logger.info(message.trim()) },
}));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(mongoSanitize());

app.use(`${config.swaggerConfig.swaggerURL}.json`, swaggerDocRouter);
app.use(config.swaggerConfig.swaggerURL, serve, setup);
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
