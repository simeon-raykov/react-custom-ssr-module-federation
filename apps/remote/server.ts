import * as path from 'path';
import express from 'express';
import cors from 'cors';

import { handleRequest } from './src/main.server';

const port = process.env['port'] || 4300;
const app = express();

const browserDist = path.join(process.cwd(), 'dist/apps/remote/browser');
const serverDist = path.join(process.cwd(), 'dist/apps/remote/server');
const indexPath = path.join(browserDist, 'index.html');

app.use(cors());

app.use('/server', express.static(serverDist));

app.get('*.*', express.static(browserDist));

app.use('*', handleRequest(indexPath));

const server = app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);

  /**
   * DO NOT REMOVE IF USING @nrwl/react:module-federation-dev-ssr executor
   * to serve your Host application with this Remote application.
   * This message allows Nx to determine when the Remote is ready to be
   * consumed by the Host.
   */
  process.send?.('nx.server.ready');
});

server.on('error', console.error);
