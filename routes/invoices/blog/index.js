
var express = require('express');
var router = express.Router();
var blogcontroller = require('./blog.controller')
/* GET home page. */
router.post('/create',blogcontroller.create_a_blogModel);
router.get('/get-all',blogcontroller.get_all_blogModels);
router.get('/get/:blogid',blogcontroller.read_a_blogModel);
router.post('/update/:id',blogcontroller.update_a_blogModel);
 router.post('/delete/:id', blogcontroller.delete_a_blogModel);


module.exports = router;