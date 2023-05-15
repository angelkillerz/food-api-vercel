const express = require('express');
const router = express.Router();
const {getFoods, insertFood} = require('../Controller/foodController')

//Route

router.route('/create').post(insertFood)
router.route('/get').get(getFoods)
                 

module.exports = router;