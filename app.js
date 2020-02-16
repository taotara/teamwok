import 'dotenv/config';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';


const app = express();
const port = parseInt(process.env.PORT, 10) || 5000;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the begining of something.',
}));

app.get('*', (req, res) => res.status(200).send({
  message: 'Route not found: Error 404!',
}));


app.listen(port, () => console.log(`Server running on port ${port}`));
