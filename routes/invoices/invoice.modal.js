var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var invoiceSchema = Schema({
	post_id:
	{
		type:Number,
	},
	post_title:
	{
		type:String,
	},
	post_desc:
	{ 
		type:String,
	},
	comments:
	{
		type:Number,
	}
});

module.exports = mongoose.model('invoices', invoiceSchema);
