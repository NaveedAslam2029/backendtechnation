var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var invoiceSchema = Schema({
	invoice_id:
	{
		type:String,
	},
	customer:
	{
		type:String,
	},
	order_no:
	{ 
		type:String,
	},
	invoice_date: 
	{
		type:Date,
		default: Date.now()
	},
	Due_date: 
	{
		type:Date,
		default: Date.now()
	},
	sales_person:
	{
		type:String,
	},
	customer_note: 
	{
		type:String,
	},
	terms_and_conditions:
	{
		type:String,
	},
	item_quantity:{
		type: String,
	},
	item_discount:{
		type: String,
	},
	email:{
		type: String,
	},
	invoice_number:{
		type: String,
	},
	shipping_charges:{
		type: String,
	},
	adjustment:{
		type: String,
	},
	total_cost:{
		type: String,
	},
	terms:{
		type: String,
	}

	
});

module.exports = mongoose.model('invoices', invoiceSchema);
