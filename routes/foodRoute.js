const express = require('express');
const router = express.Router();
const {getFoods, insertFood, getOneFood} = require('../Controller/foodController')

//Route

router.route('/create').post(insertFood)
router.route('/get').get(getFoods)
router.route('/get/:id').get(getOneFood)
                 

module.exports = router;