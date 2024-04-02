import Title from "../models/title.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

async function getTitle (req, res){
    const titles = await Title.find();
    return res.status(200).send(titles);
}

async function createTitle( req, res ){
    const title = req.body;
    const newTitle = await Title.create(title);
    return res.status(201).send(newTitle);
}

async function deleteTitle( req, res ){
    const id = req.params.id;
    await Title.findByIdAndDelete(id);
    console.log("DELETE");
    return res.status(200).send('Chat excluido com sucesso!');
}

async function updateTitle( req, res ){
    const id = req.params.id
    const name = req.body.name;
    const title = await Title.findByIdAndUpdate({"_id": id}, {"name": name});
    return res.status(200).send('Chat atualizada com sucesso!');
}

async function getResponse(req, res){
    const message = req.body.message;
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    //Adicionar a resposta e a pergunta ao respectivo title
    const id = req.params.id;
    const title = await Title.findById(id);
    
    if (!title) {
        // Se o título não for encontrado, envia um erro 404
        return res.status(404).send("Title not found");
    }

    title.questions.push(message); // Adiciona a mensagem ao array de perguntas
    title.responses.push(text); // Adiciona a resposta gerada ao array de respostas

    // Salvar as atualizações no banco de dados
    await title.save();
    return res.status(201).send(text);
}



export { getTitle, createTitle, deleteTitle, updateTitle, getResponse};