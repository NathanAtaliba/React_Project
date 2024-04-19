import mongoose, { Schema } from 'mongoose';

const chatSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    idUser:{
        type: String,
        required:true,
    },
    messages:[
        {
            question: String,
            response: String
        }
    ]
    
},{versionKey: false});

export default mongoose.model('Chat', chatSchema);