var db = require('./sqlite_connection');
var BattleDao = function(){

    /**
     * values : Tableau de valeur a inserer
     * callback : Message d'erreur
     */
    this.insert = function(values, callback){
        let stmt = db.prepare("INSERT INTO battle VALUES(?,?,?)");
        stmt.run([values[0], values[1], values[2]], callback);
    }; 

    /**
     * key : Cle d'identification
     * values : Tableau de valeur a modifier
     * callback : Message d'erreur
     */
    this.update = function(key, values, callback){
        let stmt = db.prepare("UPDATE battle SET joueur1 = ?, joueur2 = ? WHERE id=?");
        stmt.run([values[1], values[2], values[3],key],callback);
    };

    /**
     * key : Cle d'identification
     * callback : Message d'erreur
     */
     this.delete = function(key, callback){
        db.run("DELETE FROM battle WHERE id=?",key,callback);
    };

    /**
     * callback : Message d'erreur
     */
     this.findAll = function(callback){
        db.all("SELECT * FROM battle",callback);
    };

    /**
     * key : Cle d'identification
     * callback : Message d'erreur
     */
	this.findByKey = function(key, callback){
        db.all("SELECT * FROM battle WHERE id =?",key, function(err,rows){
            if(err){
                console.log(err.message);
            }else{
                callback(rows);
            }
        });
    };

    /**
     * key : Cle d'identification
     * callback : Message d'erreur
     */
    this.findByPlayerOneForeignKey = function(key, callback){
        db.all("SELECT * FROM battle WHERE joueur1 =?",key, callback);
    };

    /**
     * key : Cle d'identification
     * callback : Message d'erreur
     */
     this.findByPlayerTwoForeignKey = function(key, callback){
        db.all("SELECT * FROM battle WHERE joueur2 =?",key, callback);
    };
};

var dao = new BattleDao();
module.exports = dao;