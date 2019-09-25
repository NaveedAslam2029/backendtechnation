var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = Schema({
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
		type:String,
	}
});

module.exports = mongoose.model('blog', blogSchema);
