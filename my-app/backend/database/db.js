import mongoose, { Schema } from 'mongoose';

const chatSchema = new Schema({
    title: {
        type: String,
        required: true,
    }
    },{versionKey: false});

export default mongoose.model('Chat', chatSchema);