import express from 'express';
import mongooes from 'mongoose';
import dotenv from 'dotenv';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

dotenv.config();

mongooes.connect(process.env.MONGO_URI, ).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});