import mongoose from "mongoose";

async function connectionDatabase(){
    mongoose.connect('mongodb://127.0.0.1:27017/title')
    .then(() => console.log('Connected!'));
    }

export default connectionDatabase;