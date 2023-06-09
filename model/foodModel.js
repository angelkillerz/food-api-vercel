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
    genere: {
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

//type = 'vegetarian','high-protein','drinking','low-fat','balanced'
/*
    name : Tofu-Burger,
    image : "unsplash",
    rating : 5,
    kcl : 500,
    meal : "lunch",
    type: "Vegetarian",
    ingredients : [{name: "bacon", quantity: "2 slices"}, {name: "cheese", quantity: "2 slices"}],
    howto : [{step: "step1"}, {step: "step2"}]
*/