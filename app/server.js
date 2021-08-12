import express from 'express';

import config from './config';
import connectDB from './db';
import router from './router';

const { PORT } = config;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
  })
  .catch(() => {
    console.log('Error connecting DB');
  });
