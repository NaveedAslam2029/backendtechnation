
var express = require('express');
var router = express.Router();
var usercontroller = require('./user.controller')
/* GET home page. */
router.post('/create',usercontroller.create_a_userModel);
router.get('/get-all',usercontroller.get_all_userModels);
router.get('/get/:userId',usercontroller.read_a_userModel);
router.post('/update/:userId',usercontroller.update_a_userModel);
router.post('/delete/:userId', usercontroller.delete_a_userModel);
router.get('/get/:userId/contacts', usercontroller.get_all_contacts);


module.exports = router;