var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taxSchema = Schema({
	tax_id:
	{
		type:String,
	},
	tax_name:
	{
		type:String,
	},
	tax_precentage:
	{ 
		type:String,
	},
});

module.exports = mongoose.model('tax', taxSchema);
