const mongoose = require('mongoose')
const Schema = mongoose.Schema

let orderSchema = new Schema({
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
    orderDate: {
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
    orderId: {
        type: Schema.Types.ObjectId, ref: 'Order'
    }
},{
    collection: 'orders'
})

module.exports = mongoose.model('Orders', orderSchema)