const sqlConnection = require("../services/sqlConnection");

function listCategories(cb){
        var sql = "SELECT * FROM shop";
        var data=[];
        sqlConnection.executeQuery(sql,data,function(err,result){
            cb(err,result);
        });
    }
module.exports ={listCategories};