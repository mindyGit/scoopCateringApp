const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({

    uid: {
        type: String,
    },

    userType: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    name: {
        type: String,

    },

    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v)
            },
            message: props => `${props.value} is not a valid Email!`

        },
        required: true

    },
    password: {
        type: String,
        // minlengs: "9",
        // trim: true
    },
    phone: {
        type: String,
        default: '',
        validate: {
            validator: function (v) {
                return /^$|^\d{10}$/.test(v)
            },
            message: props => `${props.value} is not a valid phone number!`

        }

    },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    createDate: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('User', userSchema)