import * as path from 'path';
import express from 'express';
import cors from 'cors';

import { handleRequest } from './src/main.server';

const port = process.env['PORT'] || 4000;
const app = express();

const browserDist = path.join(process.cwd(), 'dist/apps/host/browser');
const indexPath = path.join(browserDist, 'index.html');

app.use(cors());

app.get('*.*', express.static(browserDist));

app.use('*', handleRequest(indexPath));

const server = app.listen(port, () => {
  console.log(`Server for host started on port ${port}`);
});

server.on('error', console.error);
