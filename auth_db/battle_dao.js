var db = require('./sqlite_connection');
var BattleDao = function(){

    /**
     * values : Tableau de valeur a inserer
     * callback : Message d'erreur
     */
    this.insert = function(values, callback){
        let stmt = db.prepare("INSERT INTO battle VALUES(?,?,?,?,?,?,?)");
        stmt.run([values[0], values[1], values[2], values[3], values[4], values[5], values[6]], callback);
    }; 

    /**
     * key : Cle d'identification
     * values : Tableau de valeur a modifier
     * callback : Message d'erreur
     */
    this.update = function(key, values, callback){
        let stmt = db.prepare("UPDATE battle SET id_joueur1 = ?, id_joueur2 = ?, score1 = ?, score2 = ?, date = ?, duree = ? WHERE id_battle=?");
        stmt.run([values[1], values[2], values[3], values[4], values[5], values[6], values[7],key],callback);
    };

    /**
     * key : Cle d'identification
     * callback : Message d'erreur
     */
     this.delete = function(key, callback){
        db.run("DELETE FROM battle WHERE id_battle=?",key,callback);
    };

    /**
     * callback : Message d'erreur
     */
     this.findAll = function(callback){
        db.getAll("SELECT * FROM battle",callback);
    };

    /**
     * key : Cle d'identification
     * callback : Message d'erreur
     */
	this.findByKey = function(key, callback){
        db.all("SELECT * FROM battle WHERE id_battle =?",key, function(err,rows){
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
        db.getAll("SELECT * FROM battle WHERE joueur1 =?",key, callback);
    };

    /**
     * key : Cle d'identification
     * callback : Message d'erreur
     */
     this.findByPlayerTwoForeignKey = function(key, callback){
        db.getAll("SELECT * FROM battle WHERE joueur2 =?",key, callback);
    };
};

var dao = new BattleDao();
module.exports = dao;