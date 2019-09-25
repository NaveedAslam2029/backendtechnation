
var express = require('express');
var router = express.Router();
var invoicecontroller = require('./invoice.controller')
/* GET home page. */
router.post('/create',invoicecontroller.create_a_invoiceModel);
router.get('/get-all',invoicecontroller.get_all_invoiceModels);
router.get('/get/:userId',invoicecontroller.read_a_invoiceModel);
router.post('/update/:userId',invoicecontroller.update_a_invoiceModel);
router.post('/delete/:userId', invoicecontroller.delete_a_invoiceModel);


module.exports = router;