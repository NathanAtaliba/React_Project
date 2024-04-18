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
    responses:{
        type: Array,
        required: true,
    },
    questions:{
        type: Array,
        required: true,
    }
    
},{versionKey: false});

export default mongoose.model('Chat', chatSchema);