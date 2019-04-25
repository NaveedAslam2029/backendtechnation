 var express = require('mongoose');
var router = express.router();
var invoicecontroller = require("./invoice.controller");

// Get Home page
router.post('insert'. invoicecontroller);
router.get('get-all', invoicecontroller);
router.get('get/invoiceId', invoicecontroller);
router.put('update/invoiceId', invoicecontroller);
router.delete('delete/invoiceId', invoicecontroller);


module.exports = router;
