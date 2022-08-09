import express from 'express';
import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import { CommonRoutesConfig } from './common/common.routes.config';
import { UrlRoutes } from './routes/url.routes';
import debug from 'debug';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

mongoose.connect('mongodb://localhost:27017/url-shortener');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to database.');
});

const port = process.env.PORT || 3000;
app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
// 404 handler
app.use(
  (
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    res.status(404).send();
  }
);

// error handler
app.use(
  (
    error: any,
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (!error) {
      return next();
    }

    res.status(500).send(error);
  }
);

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false;
}
app.use(expressWinston.logger(loggerOptions));

routes.push(new UrlRoutes(app));

const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage);
});

server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  console.log(runningMessage);
});
