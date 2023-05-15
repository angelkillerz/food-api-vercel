const express = require('express');
const router = express.Router();
const {getFoods, insertFood} = require('../Controller/foodController')

//Route

router.route('/').get(getFoods)
                 .post(insertFood);

module.exports = router;