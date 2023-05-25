const express = require('express');
const Food = require('../model/foodModel');
const dotenv = require('dotenv');



//desc GET ALL FOODS

const getFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        console.log({})
        res.json(foods);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};

//desc getOneFood

const getOneFood = async (req, res) => {
    try {
        const name = req.params.name.replace(/-/g, " "); // Replace hyphens with spaces
        const food = await Food.findOne({name: new RegExp('^' + name + '$', 'i')}); // Case-insensitive search
        console.log(food);
        res.json(food);
    } catch(err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
}

//desc createFood

const insertFood = async (req, res) => {
    const { name, image, rating, kcal,genere, meal, ingredients, howto } = req.body;
    if (!name || !image || !rating || !kcal || !genere || !meal || !ingredients || !howto) {
        res.status(400)
        throw new Error('All fields are required')
    }

    

    const food = await Food.create({
        
            name,
            image,
            rating,
            kcal,
            genere,
            meal,
            ingredients,
            howto
    
    });

    if (food) {
        res.status(200).json(food);
    }
    console.log(`Food ${food} is created and saved to the database`)
    

    
    

}

module.exports = {
    getFoods,
    insertFood,
    getOneFood
}