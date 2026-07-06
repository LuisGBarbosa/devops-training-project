import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is run on port: ${PORT}`));