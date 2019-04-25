//  var express = require('express');
// var router = express.router();
// var invoicecontroller = require("./invoice.controller");

// // Get Home page
// router.post('insert'. invoicecontroller.create_a_invoiceModel);
// router.get('get-all', invoicecontroller.list_all_invoiceModels);
// router.get('get/invoiceId', invoicecontroller.read_a_invoiceModel );
// router.put('update/invoiceId', invoicecontroller.update_invoiceModel);
// router.delete('delete/invoiceId', invoicecontroller.delete_a_invoiceModel);


// module.exports = router;

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