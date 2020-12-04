import mongoose, { Schema } from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true  
    },
    role: {
        type: String,
        default: 'user'  
    },
    root: {
        type: Boolean,
        default: false
    },
    avatar : {
        type: String,
        default: 'https://res.cloudinary.com/asmaacloud/image/upload/v1607097892/icons8-male-user-96_pfco84.png'
    }
},{
    timestamps : true
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)

export default Dataset;