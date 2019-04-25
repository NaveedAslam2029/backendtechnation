var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = Schema({
	item_id:{
		type:String,
	},
	item_type:
	{
		type:String,
	},
	item_name:
	{ 
		type:String,
	},
	unit: 
	{
		type:String,
	},
	rate: 
	{
		type:String,
	},
	tax:
	{
		type:String,
	},
	desc: 
	{
		type:String,
	},
	purchaseinfo:
	{
		type:String,
	},
	sale_rate:{
		type:String,
	},
	sale_account:{
		type:String,
	},
	sale_tax:{
		type:String,
	},
	sale_desc:{
		type:String,
	},
	purchase_rate:{
		type:String,
	},
	purchase_account:{
		type:String,
	},
	purchase_desc:{
		type:String,
	}
});

module.exports = mongoose.model('item', itemSchema);
