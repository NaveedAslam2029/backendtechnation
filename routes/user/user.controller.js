// 'use strict';
// var mongoose = require('mongoose');
// var userModel = require('./user.modal')
// 	var controller = {}
// 	controller.create_a_userModel = function (req, res) {
//     var userModel = new userModel(req.body);
//     User.findOne({userName : usr.userName}, function (err, founduserName){
//         if (err) {
//             res.send(err)
//         }
//         if (founduserName) {
//             res.send('user already exist');
//         }
//         else {
//             let userModel = new User(req.body);
//             userModel.save(function (err, newuser) {
//                 if (err) {
//                     res.send('Can Not Save User ')
//                 } else {
//                     res.jsonp({ success: newuser })
//                     res.json(newuser);
//                     console.log('New User Save Successfully')
//                 }
//             });
//         }
//     });  
// };


// controller.sign_in_userModel = function (req, res) {
//     var user = req.body;
//     User.findOne({ userName: user.userName }, function (err, founduserName) {
//     console.log(user, 'user at signin');
//         if (err) { res.send(err) }
//         console.log('found', founduserName);
//         if (founduserName) {
//             User.findOne({ password: user.password }, function (err, founduserPass) {
//                 if (err) { 
//                     console.log('err', err);
//                     res.send(err) }
//                 else {
//                     res.send({
//                         data: founduserPass ,
//                         status: 200
//                     })
//                 }  
//             })
//         } else {
//             res.send('User Not Found');
//         }
//     });  
	// userModel.findById(req.params.financeId, function (err, finance) {
	// 	if (err)
	// 		res.send(err);
	// 	res.json(finance);
	// });
// };


// controller.update_a_financeModel = function (req, res) {
// 	financeModel.findOneAndUpdate({ _id: req.params.financeId }, req.body, { new: true }, function (err, finance) {
// 		if (err)
// 			res.send(err);
// 		res.json(finance);
// 	});
// };


// controller.delete_a_financeModel = function (req, res) {
// 	financeModel.remove({
// 		_id: req.params.financeId
// 	}, function (err, finance) {
// 		if (err)
// 			res.send(err);
// 		res.json({ message: 'finance Model successfully deleted' });
// 	});
// };



// module.exports = controller;