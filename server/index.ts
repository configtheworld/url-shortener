import dotenv from 'dotenv';
import mongoose from 'mongoose';

import App from './src/App';

dotenv.config();

(async () => {
  await mongoose.connect(process.env.MONGO_URI as string);
  App.start(process.env.PORT);
})();
