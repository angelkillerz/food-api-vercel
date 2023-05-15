const mongoose = require('mongoose');
//Create mongoose Schema

//Howto Schema

const howtoSchema = new mongoose.Schema({
    step: {
        type: String,
    }
})

//Ingredient Schema
const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    quantity: {
        type: String,
    }
})

//Food Schema
const foodSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
        },
    
    image: {
        type: String,
    },

    rating: {
        type: Number,
    },

    kcal: {
        type: Number,
    },

    meal: {
        type: String,
    },

    ingredients: {
        type: [ingredientSchema],
    },

    howto: {
        type: [howtoSchema],
    }
    
    
},
{
    timestamps: true
})

module.exports = mongoose.model('Food', foodSchema);