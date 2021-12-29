
const mongoose = require('mongoose')
const { Product } = require('./Product')
const orderSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ['in process', 'done'],
        default: 'in process'
    },
    products: [{ productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, amount: { type: Number } }],

    //The owner of the order
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"

    }
})
module.exports = mongoose.model('Order', orderSchema)