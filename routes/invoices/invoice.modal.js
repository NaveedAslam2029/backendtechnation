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
	},
	Due_date: 
	{
		type:Date,
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
		quantity: String,
	},
	item_discount:{
		discount: String,
	}
	
});

module.exports = mongoose.model('invoices', invoiceSchema);
