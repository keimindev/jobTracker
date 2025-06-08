import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import appliedCompanyRouter from './routes/appliedCompany';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());

app.use('/api/appliedCompany', appliedCompanyRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});