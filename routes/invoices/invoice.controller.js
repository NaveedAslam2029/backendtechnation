'use strict';
var invoiceModel = require('./invoice.modal')
var controller = {}

controller.list_all_invoiceModels  = function(req, res){
    invoiceModel.find ({}, function(err, invoice){
        console.log('successfully find list of invoices')
        if(err)
        res.send(err);
        res.json(invoice);
    });
};

controller.create_a_invoiceModel = function(req,res){
    var new_invoiceModel = new invoiceModel(req,body);
    new_invoiceModel.save(function(err,invoice){
        console.log('successfully created Invoice')
        if (err)
        res.send(err);
        res.json(invoice);
    });
}
controller.read_a_invoiceModel = function(req,res){
    invoiceModel.find({_id: req.params.invoiceId}, function(req,res){
        console.log('Successfully get Invoice id')
        if(err)
        res.send(err);
        res.json(invoice);
    });
    
}
controller.update_invoiceModel = function(req,res){
    invoiceModel.findOneAndUpdate({_id: req.params.invoiceId}, req.body,{new :true},function(err,invoice){
        console.log('invoice successfully updated')
        if(err)
        res.send(err);
        res.json(invoice);
    });
}

controller.delete_a_invoiceModel = function(req,res){
    invoiceModel.remove({_id: req.params.invoiceId
    },
    function(err,invoice){
        if(err)
        res.send(err);
        res.json(invoice);
        console.log('invoice successfully deleted')    
    });
}



module.exports = controller;