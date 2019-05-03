var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseSchema = Schema({
	exp_id:{
		type:String,
	},
	exp_name:
	{ 
		type:String,
	},
	exp_date: 
	{
		type:Date,  default: Date.now
	},
	exp_amount: 
	{
		type:String,
	},
	exp_tax:
	{
		type:String,
	},
	reference_no: 
	{
		type:String,
	},
	payment_medium:
	{
		type:String,
	}
});

module.exports = mongoose.model('expense', expenseSchema);
