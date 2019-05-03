var express = require('express');
var router = express.Router();
var expensecontroller = require('./expense.controller')
/* GET home page. */
router.post('/create',expensecontroller);
router.get('/get-all',expensecontroller);
router.get('/get/:itemId',expensecontroller);
router.post('/update/:itemId',expensecontroller);
router.post('/delete/:itemId',expensecontroller);


module.exports = router;