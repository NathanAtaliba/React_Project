import Title from "../models/title.js";

async function getTitle (req, res){
    const titles = await Title.find();
    console.log("GET");
    return res.status(200).send(titles);
}

async function createTitle( req, res ){
    console.log("POST");
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
    console.log("UPDATE")
    const title = await Title.findByIdAndUpdate({"_id": id}, {"name": name});
    return res.status(200).send('Chat atualizada com sucesso!');
}

export { getTitle, createTitle, deleteTitle, updateTitle};