import express, { Application } from 'express';
import router from './routers/ShortenerRoute';
import cors from 'cors';

class ApiApp {
  private application: Application;

  constructor() {
    this.application = express();
    this.setupGlobalMiddleware();
    this.setupRouters();
    this.cors();
  }

  cors() {
    const allowedOrigins = ['http://localhost:8080', 'http://localhost:3000'];
    const options: cors.CorsOptions = {
      origin: allowedOrigins,
      credentials: true,
    };
    this.application.use(cors(options));
    this.application.use(express.json());
  }

  start(port: string | number = 3000) {
    return this.application.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`listening on port ${port}`);
    });
  }

  getApplication() {
    return this.application;
  }

  private setupGlobalMiddleware() {
    this.application.use(express.json());
  }

  private setupRouters() {
    this.application.get('/', (_, res) => {
      res.json({ message: 'Url-shortener' });
    });

    this.application.use('/urls', router.getRouter());
  }
}

export default new ApiApp();
