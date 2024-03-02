import express from 'express';
import connectionDatabase from './database/db.js';
import routes from './routes.js'
import cors from 'cors';

const app = express();

const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(cors());

app.use(express.json());

app.use(routes);


connectionDatabase()
.then(()=>{
    app.listen(port, () => { console.log(`App rodando na porta ${port}`);
    })
})
.catch(error =>{ console.log('Erro:', error);
});