import Chat from "../models/chat.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

async function getChat (req, res){
    const idChat = req.params.id
    const chats = await Chat.find({ _id: { $eq: idChat } });
    return res.status(200).send(chats);
}

async function getChats (req, res){
    const idUser = req.body.idUser 
    const chats = await Chat.find({ idUser: { $eq: idUser } });
    return res.status(200).send(chats);
}

async function createChat( req, res ){
    const chat = req.body
    const newChat = await Chat.create(chat);
    return res.status(201).send(newChat);
}

async function deleteChat( req, res ){
    const id = req.params.id;
    await Chat.findByIdAndDelete(id);
    return res.status(200).send('Chat excluido com sucesso!');
}

async function updateChat( req, res ){
    const id = req.params.id
    const name = req.body.name;
    const chat = await Chat.findByIdAndUpdate({"_id": id}, {"name": name});
    return res.status(200).send('Chat atualizada com sucesso!');
}

async function getResponse(req, res) {
    try {
      const message = req.body.message;
      const result = await model.generateContent(message);
      const response = await result.response;
      const text = response.text();
      const idChat = req.body.idChat;
  
      const chat = await Chat.findById(idChat);
  
      if (!chat) {
        return res.status(404).send('Chat not found');
      }
  
      // Criar um novo objeto para representar a pergunta e resposta
      const newMessage = {
        question: message,
        response: text,
      };
  
      // Adicionar o novo objeto à lista de mensagens
      chat.messages.push(newMessage);
  
      // Salvar as atualizações no banco de dados
      await chat.save();
  
      // Retornar a resposta para o cliente
      return res.status(201).send(text);
    } catch (error) {
      console.error('Erro ao processar resposta:', error);
      return res.status(500).send('Internal Server Error');
    }
  }



export { getChat, getChats, createChat, deleteChat, updateChat, getResponse};