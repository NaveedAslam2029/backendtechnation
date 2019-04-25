'use strict';
var mongoose = require('mongoose');
var taxModel = require('./tax.model')
	var controller = {}

controller.list_all_taxModels = function (req, res) {
	taxModel.find({}, function (err, tax) {
		if (err)
			res.send(err);
		res.json(tax);
	});
};


controller.create_a_taxModel = function (req, res) {
	var new_taxModel = new taxModel(req.body);
	new_taxModel.save(function (err, tax) {
		console.log('successfully created')
		if (err)
			res.send(err);
		res.json(tax);
	});
};


controller.read_a_taxModel = function (req, res) {
taxModel.findById(req.params.taxId, function (err, tax) {
		if (err)
			res.send(err);
		res.json(tax);
	});
};


controller.update_a_taxModel = function (req, res) {
	taxModel.findOneAndUpdate({ _id: req.params.taxId }, req.body, { new: true }, function (err, tax) {
		if (err)
			res.send(err);
		res.json(tax);
	});
};


controller.delete_a_taxModel = function (req, res) {
	taxModel.remove({
		_id: req.params.taxId
	}, function (err, item) {
		if (err)
			res.send(err);
		res.json({ message: 'item Model successfully deleted' });
	});
};



module.exports = controller;