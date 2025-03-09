import express from 'express';
import mongooes from 'mongoose';
import dotenv from 'dotenv';   
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
import e from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

dotenv.config();

mongooes.connect(process.env.MONGO_URI, ).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });