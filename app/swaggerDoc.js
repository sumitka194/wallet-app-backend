import { Router } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import config from './config';

const router = Router();

router.route('/')
  .get((req, res) => {
    const options = {
      apis: ['build/**/*.js'],
      swaggerDefinition: config.swaggerConfig.swaggerJsOptions,
    };
    const swaggerSpec = swaggerJSDoc(options);
    res.send(swaggerSpec);
  });

const { serve, setup: swaggerSetup } = swaggerUi;

const setup = swaggerSetup(undefined, {
  swaggerUrl: `${config.swaggerConfig.swaggerURL}.json`,
});

export {
  router,
  serve,
  setup,
};
