const { type } = require('jquery')
const mongoose = require('mongoose')
const category = require('./Category')
const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {

        type: String
    },
    img: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    display: {
        type: Boolean,
        default: true
    },
    categories: {
        type: mongoose.Schema.Types.ObjectId, ref: "Category"
    },
    SubCategories: {
        type: mongoose.Schema.Types.ObjectId, ref: "SubCategory"
    },
    createDate: {
        type: Date,
        default: Date.now()
    },
    priceList: [{ amount: { type: mongoose.Schema.Types.ObjectId, ref: "Amount" }, price: { type: Number } }]
})
module.exports = mongoose.model('Product', productSchema)