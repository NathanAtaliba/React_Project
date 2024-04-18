import { Router } from 'express';
import { getChats, createChat, deleteChat, updateChat, getResponse } from './controllers/chatController.js';
import { getUser, createUser, deleteUser, updateUser } from './controllers/userController.js';

const routes = Router();

//ROUTES Chat
routes.post('/chats/user', getChats);
routes.post('/chat/create', createChat);
routes.delete('/chat/:id', deleteChat);
routes.put('/chat/:id', updateChat);

routes.post('/send/question', getResponse);

//ROUTES User
routes.get('/user/login', getUser);
routes.post('/user/create', createUser);
routes.delete('/user/delete', deleteUser);
routes.put('/user/update', updateUser);

export default routes;