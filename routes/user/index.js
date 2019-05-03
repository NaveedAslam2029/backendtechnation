
// var express = require('express');
// var router = express.Router();
// var user = require('./user.controller')
/* GET home page. */
// router.post('/newuser',usercontroller.create_a_userModel)
// router.post('/login',usercontroller.sign_in_userModel);
// router.get('/get-all',usercontroller.get_all_userModels);
// router.get('/get/:userId',usercontroller.read_a_userModel);
// router.post('/update/:userId',usercontroller.update_a_userModel);
// router.post('/delete/:userId', usercontroller.delete_a_userModel);
// router.get('/get/:userId/contacts', usercontroller.get_all_contacts);


// module.exports = router;
var express = require("express");
var router = express.Router();
var User = require("./user.modal");

// Sign In User
router.post("/signin", function(req, res) {
  var user = req.body;
  console.log(user, "login request at server");
  User.findOne({ username: user.username }, function(err, gotuser) {
    if (err) {
      res.send(err, "Invalid User");
    }
    console.log("got", user);
    if (gotuser) {
      User.findOne({ password: user.password }, function(err, user) {
        if (err) {
          res.send(err, "Invalid Password");
        } else {
          console.log("password verified");
          if (user) {
            return res.json("user");
          }
          else {
              res.status('500').send('not found')
          }
        }
      });
    }
  });
});

// Sign Up New User
router.post("/signup", function(req, res) {
  var user = req.body;
  console.log(user, "New User at server");
  User.findOne({ username: user.username }, function(err, gotuser) {
    if (err) {
      res.send(err);
    }
    console.log("got", user);
    if (gotuser) {
      console.log("User Already Exist", user);
      res.send("User Already Exist");
    } else {
      let user = new User(req.body);
      user.save(function(err, data) {
        if (err) {
          res.send("Can not Save User");
        }
        res.jsonp({ success: true });
      });
      console.log("New User Created");
    }
  });
});

// User List
router.get("/list", function(req, res) {
  UserModel.find((err, user) => {
    if (err) console.log(err);
    else res.json(user);
  });
  console.log("All User Search");
});

module.exports = router;
