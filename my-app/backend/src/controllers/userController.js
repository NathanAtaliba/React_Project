import User from "../models/user.js";

async function getUsers (req, res){
    const users= await Chat.find();
    return res.status(200).send(users);
}

async function getUser (req, res){
    const users = await Chat.find();
    return res.status(200).send(users);
}

async function createUser( req, res ){
    const user = req.body
    const newUser = await User.create(user);
    return res.status(201).send(newUser);
}

async function deleteUser( req, res ){
    const id = req.body.id;
    await User.findByIdAndDelete(id);
    return res.status(200).send('User excluido com sucesso!');
}

async function updateUser( req, res ){
    const id = req.body.id
    const password = req.body.password;
    await Chat.findByIdAndUpdate({"_id": id}, {"password": password});
    return res.status(200).send('User atualizada com sucesso!');
}

export { getUser, createUser, deleteUser, updateUser};