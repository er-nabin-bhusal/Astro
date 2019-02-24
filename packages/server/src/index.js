// import '@babel/polyfill';
import express from 'express';
import http from 'http';
import run from 'app-node';
import bodyParser from 'body-parser';
import authExpress from './express';
import { init as dbinit } from './db';

const port = process.env.PORT || 4001;
const app = express();
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
const server = http.createServer(app);
run(async () => {
  await dbinit();
  authExpress(app);
  console.log(`server started at port ${port}`);
  server.listen(port);
});
