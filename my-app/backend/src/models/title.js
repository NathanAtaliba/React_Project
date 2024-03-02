import mongoose, { Schema } from 'mongoose';

const titleSchema = new Schema({
    _id:{
        type: Number,
        required: true,    
    },
    name: {
        type: String,
        required: true,
    },
    response:{
        type: Array,
        required: true,
    },
    question:{
        type: Array,
        required: true,
    }
    
},{versionKey: false, _id: false});

export default mongoose.model('Title', titleSchema);