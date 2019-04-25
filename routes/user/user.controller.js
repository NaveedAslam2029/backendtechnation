'use strict';
var mongoose = require('mongoose');
var userModel = require('./user.modal')
var controller = {}

controller.get_all_userModels = function(req,res){
    userModel.find({},function(err,User){
        console.log('All User are Successfully fetched')
        if(err)
        res.send(err);
        res.json(User);
    });
}
controller.create_a_userModel = function(req,res){
    var new_userModel = new userModel(req.body);
    // varnew_userModel  = new userModel(req.body);
    new_userModel.save(function(err,user){
        console.log('Successfullt Inserted')
        if (err)
        res.send (err);
        res.json(user);

    });
    
}
controller.read_a_userModel = function(req,res){
    userModel.findById(req.params.userId, function(err,user){
        console.log('Successfully fetched user id')
        if(err)
        res.send(err);
        res.json(user);
    });
}
controller.update_a_userModel = function(req,res){
userModel.findOneAndUpdate({_id: req.params.userId},req.body,{new : true},function(err,user){
    console.log('successfully updated')
    if(err)
    res.send(err);
    res.json(user);
});
}
controller.delete_a_userModel = function(req,res){
    userModel.remove({_id:req.params.userId},function(err,user){
        console.log('Successfully Deleted')
        if(err)
        res.send(err);
        res.json(user);
    });
}


module.exports = controller;