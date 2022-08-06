import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import { postUrl, redirectToUrl } from '../controllers/url.controllers';

export class UrlRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UrlRoutes');
  }

  configureRoutes() {
    this.app.get('/url/:short', redirectToUrl);
    this.app.post('/url', postUrl);

    return this.app;
  }
}
