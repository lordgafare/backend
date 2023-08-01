import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';
import router from './routes';
import swaggerUi from "swagger-ui-express";
import specs from './config/swagger';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use('/apis', router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
  res.send('Hello, Express with TypeScript!');
});

app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
});
