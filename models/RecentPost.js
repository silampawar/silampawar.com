var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var recentPostSchema = new Schema({
    postTitle: {
        type:String,
        required: true,
        unique: true
    },
    description: String,
    uploadedDate: Date,
    tags: String,
    url : String,
   
    DEL_FLAG: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('recentPost', recentPostSchema);