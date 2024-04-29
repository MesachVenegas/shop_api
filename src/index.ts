import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


app.listen( PORT, () => {
  console.log(`Server is connected on port: ${PORT}`)
})