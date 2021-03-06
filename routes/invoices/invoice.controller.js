'use strict';
var mongoose = require('mongoose');
var invoiceModel = require('./invoice.modal')
var controller = {}

controller.get_all_invoiceModels = function(req,res){
    invoiceModel.find({},function(err,invoice){
        console.log('All User are Successfully fetched')
        if(err)
        res.send(err);
        res.json(invoice);
    });
}
controller.create_a_invoiceModel = function(req,res){
    var new_invoiceModel = new invoiceModel(req.body);
    new_invoiceModel.save(function(err,invoice){
        console.log('Successfully Inserted')
        if (err)
        res.send (err);
        res.json(invoice);

    });
    
}
controller.read_a_invoiceModel = function(req,res){
    invoiceModel.findById(req.params.invoiceId, function(err,invoice){
        console.log('Successfully fetched user id')
        if(err)
        res.send(err);
        res.json(invoice);
    });
}
controller.update_a_invoiceModel = function(req,res){
    invoiceModel.findOneAndUpdate({_id: req.params.invoiceId},req.body,{new : true},function(err,invoice){
    console.log('successfully updated')
    if(err)
    res.send(err);
    res.json(invoice);
});
}
controller.delete_a_invoiceModel = function(req,res){
    invoiceModel.remove({_id:req.params.invoiceId},function(err,invoice){
        console.log('Successfully Deleted')
        if(err)
        res.send(err);
        res.json(invoice);
    });
}


module.exports = controller;