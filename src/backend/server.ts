import express from 'express';
import bodyParser from 'body-parser';

import { didDocumentPromise } from './utilities/didDocument';
import { configuration } from './utilities/configuration';
import { logger } from './utilities/logger';

import { staticFiles } from './endpoints/staticFiles';

(async () => {
  await didDocumentPromise;
  logger.info('Blockchain connection initialized');

  const app = express();
  app.use(bodyParser.json());

  app.use(staticFiles);

  logger.info('Routes configured');

  const host = 'localhost';
  const { port } = configuration;
  const started = app.listen(port, host, () =>
    logger.info(`Listening on http://${host}:${port}`),
  );

  function stop() {
    started.close();
    process.exit(1);
  }

  process.on('unhandledRejection', stop);
  process.on('uncaughtException', stop);
})();