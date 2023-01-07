//import cors from 'cors';
import 'express-async-errors';
import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

//db and authenticate user
import connectDB from './db/connect.js';

//routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

// middleWare
import notFoundMiddleware from './middleware/not-found.js';
//put this below not found js
import errorHAndlerMiddleware from './middleware/error-handler.js';

//app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//   res.json({ msg: 'Welcome!' });
// });

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'API' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

// put this below because after checking all the routes and if
// they are not declares above this will trigger not found middleware
app.use(notFoundMiddleware);

//put error handler button always
app.use(errorHAndlerMiddleware);
const port = process.env.PORT || 5000;

//connect db

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
