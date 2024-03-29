import mongoose from 'mongoose';
import httpStatus from 'http-status';

import config from '../config';
import ApiError from '../helpers/ApiError';
import logger from './logger';

export default {
  // eslint-disable-next-line no-unused-vars
  errorHandler: (err, req, res, next) => {
    let { statusCode, message } = err;
    if (config.env === 'production' && !err.isOperational) {
      statusCode = httpStatus.INTERNAL_SERVER_ERROR;
      message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
    }

    res.locals.err = err.message;

    const response = {
      code: statusCode,
      message,
      ...(config.env === 'development' && { stack: err.stack }),
    };

    logger.error(err);

    res.status(statusCode).send(response);
  },

  errorFormatter: (err, req, res, next) => {
    let error = err;
    if (!(error instanceof ApiError)) {
      const statusCode = error.statusCode
        || error instanceof mongoose.Error
        ? httpStatus.BAD_REQUEST
        : httpStatus.INTERNAL_SERVER_ERROR;
      const message = error.message || httpStatus[statusCode];
      error = new ApiError(statusCode, message, false, err.stack);
    }
    next(error);
  },
};
