import Chat from "../models/chat.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

async function getChat (req, res){
    const titles = await Chat.find();
    return res.status(200).send(titles);
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

async function getResponse(req, res){
    const message = req.body.message;
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    const idchat = req.body.idChat;
    const chat = await Chat.findById(idchat);
    
    if (!chat) {
        // Se o título não for encontrado, envia um erro 404
        return res.status(404).send("Chat not found");
    }

    chat.questions.push(message); // Adiciona a mensagem ao array de perguntas
    chat.responses.push(text); // Adiciona a resposta gerada ao array de respostas

    // Salvar as atualizações no banco de dados
    await chat.save();
    return res.status(201).send(text);
}



export { getChat, createChat, deleteChat, updateChat, getResponse};