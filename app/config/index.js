import { config } from 'dotenv';

config();

const configuration = {
  PORT: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/wallet-app',
};

export default configuration;
