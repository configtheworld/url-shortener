import express, { Application } from 'express';
import supertest from 'supertest';

import ShortenerRoute from './ShortenerRoute';
import UrlController from '../controllers/ShortenerController';

jest.mock('../controllers/ShortenerController');
