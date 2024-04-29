import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Inicializado del App y definición del puerto a utilizar
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Función get para probar que el servidor se ejecuta correctamente y le llegan las peticiones.
app.get('/ping', (_ , res) => {
  console.info('Alguien ha hecho un ping al API');
  res.send('Pong!')
})

app.listen( PORT, () => {
  console.log(`Server is connected on port: ${PORT}`)
})