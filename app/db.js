import mongoose from 'mongoose';
import config from './config';

const { mongoURI } = config;

function connectDB() {
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoURI)
      .then(() => {
        console.log(`Connected to database: ${mongoURI}`);
        resolve();
      })
      .catch((err) => {
        console.error(`Error connecting to database: ${mongoURI}`, err);
        reject(err);
      });

    mongoose.connection.on('error', () => {
      throw new Error(`unable to connect to database: ${mongoURI}`);
    });
  });
}

export default connectDB;
