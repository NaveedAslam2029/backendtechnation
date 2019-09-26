
var express = require('express');
var router = express.Router();
var blogcontroller = require('./blog.controller')
/* GET home page. */
router.post('/create',blogcontroller.create_a_blogModel);
router.get('/get-all',blogcontroller.get_all_blogModels);
// router.get('/get/:postid',blogcontroller.read_a_blogModel);
// router.post('/update/:postid',blogcontroller.blog_a_blogModel);
// router.post('/delete/:postid', blogcontroller.delete_a_blogModel);


module.exports = router;