import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';

export class UrlRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UrlRoutes');
  }

  configureRoutes() {
    this.app
      .route(`/urls`)
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`List of urls`);
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send(`Post to urls`);
      });

    this.app
      .route(`/urls/:urlId`)
      .all(
        (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          // middleware
          next();
        }
      )
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`GET requested for id ${req.params.urlId}`);
      })
      .put((req: express.Request, res: express.Response) => {
        res.status(200).send(`PUT requested for id ${req.params.urlId}`);
      })
      .patch((req: express.Request, res: express.Response) => {
        res.status(200).send(`PATCH requested for id ${req.params.urlId}`);
      })
      .delete((req: express.Request, res: express.Response) => {
        res.status(200).send(`DELETE requested for id ${req.params.urlId}`);
      });

    return this.app;
  }
}
