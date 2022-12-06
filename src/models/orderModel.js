const mongoose = require('mongoose')
const Schema = mongoose.Schema

let orderSchema = new Schema({
    shipmentDate: {
        type: Date,
        required: true,
    },
    shipmentTime: {
        type: String,
        required: true,
    },
    deliveryStatus: {
        type: String,
        required: true,
    },
    length: {
        type: Number,
        min: 100,
        required: true,
    },
    width: {
        type: Number,
        min: 100,
        required: true,
    },
    high: {
        type: Number,
        min: 100,
        required: true,
    },
    weight: {
        type: Number,
        min: 100,
        required: true,
    },
    pickupCity: {
        type: String,
        required: true,
    },
    pickupAdress: {
        type: String,
        required: true,
    },
    orderDate: {
        type: Date,
        required: true,
    },
    recipientName: {
        type: String,
        required: true,
    },
    recipientTypeDocument: {
        type: Number,
        required: true,
    },
    recipientDocument: {
        type: String,
        required: true,
    },
    deliveryCity: {
        type: String,
        required: true,
    },
    deliveryAdress: {
        type: String,
        required: true,
    },
    shipmentId: {
        type: Schema.Types.ObjectId, ref: 'Order'
    }
},{
    collection: 'orders'
})

module.exports = mongoose.model('Orders', orderSchema)