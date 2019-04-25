var express = require('express');
var router = express.Router();
var taxcontroller = require('./tax.controller')
/* GET home page. */
router.post('/create',taxcontroller.create_a_taxModel);
router.get('/get-all',taxcontroller.list_all_taxModels);
router.get('/get/:taxId',taxcontroller.read_a_taxModel);
router.put('/update/:taxId',taxcontroller.update_a_taxModel);
router.delete('/delete/:taxId',taxcontroller.delete_a_taxModel);


module.exports = router;