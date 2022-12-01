const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 100,
        required: true,
    },
    birthDate: {
        type: Date
    },
    country: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
}, {
    collection: 'users'
})


module.exports = mongoose.model('Users', userSchema)