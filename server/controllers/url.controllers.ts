import express from 'express';

export async function redirectToUrl(
  _req: express.Request,
  _res: express.Response,
  _next: express.NextFunction
) {
  _res.status(200).send('redirecting from short url to actual url');
}

export async function postUrl(
  _req: express.Request,
  _res: express.Response,
  _next: express.NextFunction
) {
  _res.status(200).send('short url created');
}
