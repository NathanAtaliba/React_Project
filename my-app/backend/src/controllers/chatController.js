import Title from "../models/title.js";

async function getTitle (req, res){
    const tasks = await Task.find();
    return res.status(200).send(tasks);
}
async function createTitle( req, res ){
    const task = req.body;
    const newTask = await Task.create(task);
    return res.status(201).send(newTask);
}
async function deleteTitle( req, res ){
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    return res.status(200).send('Task excluida com sucesso!');
}
async function updateTitle( req, res ){
    const id = req.params.id
    const status = req.body.status;
    const description = req.body.description;
    const task = await Task.findByIdAndUpdate({"_id": id}, {"status": status, "description": description});
    return res.status(200).send('Task atualizada com sucesso!');
}

export { getTitle, createTitle, deleteTitle, updateTitle};