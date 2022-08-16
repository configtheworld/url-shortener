import express, { Application } from 'express';
import { MockedObject, mocked } from 'ts-jest/dist/utils/testing';
import supertest from 'supertest';

import ShortenerRoute from './ShortenerRoute';
import UrlController from '../controllers/ShortenerController';

jest.mock('../controllers/ShortenerController');

describe('ShortenerRoute', () => {
  const shortId = 'short-id';
  const expectedResponse = expect.anything();
  let app: Application;
  let request: supertest.SuperTest<supertest.Test>;
  let UrlControllerMock: MockedObject<typeof UrlController>;
  beforeEach(() => {
    UrlControllerMock = mocked(UrlController);
    UrlControllerMock.redirectUrl.mockImplementation(
      async (res: express.Response) => {
        return res.json({});
      }
    );
    app = express();
    app.use(express.json());
    app.use('/', ShortenerRoute.getRouter());
    request = supertest(app);
  });

  it('should call UrlController.redirectUrl function when GET /:shortId', async () => {
    await request.get(`/${shortId}`);
    expect(UrlControllerMock.redirectUrl).toHaveBeenCalledWith(
      expect.objectContaining({
        params: { shortId },
      }),
      expectedResponse
    );
  });
});
