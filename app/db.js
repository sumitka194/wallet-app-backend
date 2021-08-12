import mongoose from 'mongoose';
import config from './config';

const { mongoURI } = config;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

function connectDB() {
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoURI, options, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });

    mongoose.connection.on('error', () => {
      throw new Error(`unable to connect to database: ${mongoURI}`);
    });
  });
}

export default connectDB;
