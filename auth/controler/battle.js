var battle_dao = require('auth_db').battle_dao;
const bcrypt = require('bcrypt');

module.exports = class ControleurBattle {
    /**
     * 
     * @param { id de l'utilisateur 1} player1 
     * @param { id de l'utilisateur 2 } player2 
     * @param { score de l'utilisateur 1 } score1 
     * @param { score de l'utilisateur 2 } score1 
     * @param { date en string au format dd/mm/YYYY } date 
     * @param { tems en ms } time 
     */
    addBattleToDB(player1, player2, score1, score2, date, time, callback)
    {
        // TODO mettre au bon format date et time 
        
        battle_dao.insert([player1, player2, score1, score2, date, time], (err, battle)=>{
            if(err == null){
                callback( {statusRequest:201, id : battle.insertId});
            }else{
                callback( {statusRequest:500 ,"erreur" : "bdd"});
            }
        });
    }
}