import express from 'express';
import routes from '../routes/index.js';
import ErrorHandler from '../middlewares/error.js';

const app = express();
const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:8080';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  return next();
});

app.use(express.json());
app.use(routes);
app.use(ErrorHandler);

export default app;
