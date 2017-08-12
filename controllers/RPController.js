//load RecentPost Models
var RecentPost = require('../models/RecentPost.js');

function getData(callback) {
    return RecentPost.find({},null, {sort: {uploadedDate: -1 }},  function (err, data) {
        callback(data);
    });
}

exports.findAll = function (req, res) {
    getData(data => {
        res.send({ data });
    });
};



function getDataByID(id, callback) {
    return RecentPost.find({ _id: id }, function (err, data) {
        callback(data);
    });
}

exports.findById = function (req, res) {
    getDataByID(req.params.id, data => {
   
        res.send({ data });
    });
};
