'use strict';
var mongoose = require('mongoose');
var blogModel = require('./blog.Model')
var controller = {}
controller.get_all_blogModels = function(req,res){
    blogModel.find({},function(err,blog_post){
        console.log('All Blogs are Successfully fetched')
        if(err)
        res.send(err);
        res.json(blog_post);
    });
}

controller.create_a_blogModel = function(req,res){
    var new_blogModel = new blogModel(req.body);
    new_blogModel.save(function(err,blog_post){
        console.log('Successfully Inserted')
        if (err)
        res.send (err);
        res.json(blog_post);

    });
    
}
controller.read_a_blogModel = function(req,res){
    console.log(req.params.blogid);
    blogModel.findById(req.params.blogid, function(err,blog_post){
        console.log('Successfully fetched user id')
        if(err)
        res.send(err);
        res.json(blog_post);
    });
}
controller.update_a_blogModel = function(req,res){
    blogModel.findOneAndUpdate({_id: req.params.blogid},req.body,{new : true},function(err,blog_post){
    console.log('successfully updated')
    if(err)
    res.send(err);
    res.json(blog_post);
});
}
controller.delete_a_blogModel = function(req,res){
    blogModel.remove({_id:req.params.blogid},function(err,blog_post){
        console.log('Successfully Deleted')
        if(err)
        res.send(err);
        res.json(blog_post);
    });
}


module.exports = controller;