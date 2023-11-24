import express from 'express'
import triggerRoutes from './routes/triggerRoutes';
import gitHubWebhooks from './routes/gitHubWebhooks';
require('dotenv').config();



const app = express();
const port = 3000;

app.use(express.json())

app.use('/api', triggerRoutes, gitHubWebhooks)

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en http://localhost:${port}`);
});