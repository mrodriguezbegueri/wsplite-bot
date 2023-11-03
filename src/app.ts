import express from 'express'
import triggerRoutes from './routes/triggerRoutes';
require('dotenv').config();



const app = express();
const port = 3000;

app.use(express.json())

app.use('/api', triggerRoutes)

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en http://localhost:${port}`);
});