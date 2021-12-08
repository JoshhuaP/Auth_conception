var db = require('./sqlite_connection');
var UserDAO = function(){

    /**
     * values : Tableau de valeur a inserer
     * callback : Message d'erreur
     */
    this.insert = function(values, callback){

        let stmt = db.prepare("INSERT INTO user (email, pseudo, password) VALUES(?,?,?)");
        stmt.run([values[0] ,values[1] ,values[2]] , function(err){
            if(err){
                callback(err, null);
            }else{
                callback(null,this.lastID);
            } 
        });
    };

    /**
     * key : Cle d'identification
     * values : Tableau de valeur a modifier
     * callback : Message d'erreur
     * TODO
     */
    this.update = function(key, values, callback){
        let stmt = db.query("UPDATE user SET pseudo = ?, email = ?, password = ? WHERE id=?", function(err,rows){
            if(err){
                callback(err, null);
            }else{
                callback(null, rows);
            }
        });
        stmt.run([values[1], values[2], values[3], values[4],key],callback);
    };

    /**
     * key : Cle d'identification
     * callback : Message d'erreur
     * TODO
     */
     this.delete = function(key, callback){
        db.query("DELETE FROM user WHERE id=?", key, callback)
    };

    /**
     * callback : Message d'erreur
     */
     this.findAll = function(callback){
        db.all("SELECT * FROM user", function (err, rows) {
            if(err){
                callback(err, null);
            }else{
                callback(null, rows);
            }
        });
    };

    /**
     * key : Cle d'identification
     * callback : Message d'erreur
     */
	this.findByKey = function(key, callback){
        db.all("SELECT * FROM user WHERE id_user = ?",key, function (err, rows) {
            if(err){
                callback(err, null);
            }else{
                callback(null, rows);
            }
        });
    };

    /**
     * key : Cle d'identification
     * callback : Message d'erreur
     */
    this.findByMail = function(key, callback){
        db.all("SELECT * FROM user WHERE email = ?",key, function (err, rows) {
            if(err){
                callback(err, null);
            }else{
                callback(null, rows);
            }
        });
    };

    /**
     * key : Cle d'identification
     * callback : Message d'erreur
     */
     this.findByPseudo = function(key, callback){
        db.all("SELECT * FROM user WHERE pseudo = ?",key, function (err, rows) {
            if(err){
                callback(err, null);
            }else{
                callback(null, rows);
            }
        });
    };
};

var dao = new UserDAO();
module.exports = dao;