import express from 'express';
import dotenv from 'dotenv';
//require('express-async-errors');

import user from './routes/userRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 8080;

console.log(process.env.NODE_ENV);

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the OBENPRIME Auth API');
});

app.use('/api', user);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

