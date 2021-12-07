var sqlite3 = require ("sqlite3");
var dao = new sqlite3.Database(__dirname+"/DB_conception.sql", sqlite3.OPEN_READWRITE, function(err){
	if(err){
		console.log(err.message);
    }
});
module.exports = dao;