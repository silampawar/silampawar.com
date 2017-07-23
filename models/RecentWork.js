var mongoose = require('mongoose');

//var mongoURL = "mongodb://silampawar:rockinginfy@cluster0-shard-00-00-clz8f.mongodb.net:27017,cluster0-shard-00-01-clz8f.mongodb.net:27017,cluster0-shard-00-02-clz8f.mongodb.net:27017/NewLoginApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
//mongoose.connect(mongoURL);

var Schema = mongoose.Schema;
var recentWorkSchema = new Schema({
    imgSrc: String,
    mainImageSrc: String, 
    workTitle: {
        type:String,
        required: true,
        unique: true
    },
    description: String,
    uploadedDate: Date,
    tags: String,
    urlWebsite : String,
    urlGitHub: String,
    DEL_FLAG: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('recentWork', recentWorkSchema);