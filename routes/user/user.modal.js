var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var userSchema = Schema({
    user_id:{
        type:String,
    },
    user_name:{
        type:String,
    },
    full_name:{
        type:String,
    },
    user_email:{
        type:String,
    },
    user_password:{
        type:String,
    },
    user_country:{
        type:String,
    },
    user_pic:{
        type:String,
    },
    user_url:{
        type:String,
    },
    bussiness_location:{
        type:String,
    },
    user_language:{
        type:String,
    },
    time_zone:{
        type:String,
    },
    date_format:{
        type:String,
    },
    fical_year_start:{
        type:String,
    },
    address:{
        type:String,
    },

});
module.exports =mongoose.model('user',userSchema);