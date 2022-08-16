import { Router } from 'express';
import UrlController from '../controllers/ShortenerController';
class ShortenerRoute {
  private router: Router;
  constructor() {
    this.router = Router();
    this.setupRouter();
  }
  private setupRouter() {
    throw new Error('Not implemented yet!');
  }
  getRouter() {
    return this.router;
  }
}
export default new ShortenerRoute();
