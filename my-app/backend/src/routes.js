import { Router } from 'express';
import { getTitle, createTitle, deleteTitle,updateTitle, getResponse } from './controllers/chatController.js';

const routes = Router();

//ROUTES TITLE
routes.get('/title', getTitle);
routes.post('/title', createTitle);
routes.delete('/title/:id', deleteTitle);
routes.put('/title/:id', updateTitle);
routes.post('/:id/response', getResponse);

export default routes;