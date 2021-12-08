const ControleurBattle  = require('../controler/battle');

module.exports = class RequestReaderBattle {

    /**
     * 
     * @param { la requette post } request 
     */
    readData(request, callback){
        let body = request.body;
        let player1 = body.idP1;
        let player2 = body.idP2;
        let score1 = body.score1;
        let score2 = body.score2;
        let date = body.date;
        let time = body.time;
        if(player1 == null || player2 == null || score1 == null || score2 == null || date == null || time == null){
            let info = {}
            info.statusRequest = 400;
            info.body = {message: 'accept : idP1=idUser1&idP2=idUser2&score1=1&score2=2&date="yyyy-mm-dd"&time="hh:mm:ss"'};
            callback( info );
            return;
        }
        
        //request the controleur
        let controleurBattle = new ControleurBattle();
        controleurBattle.addBattleToDB(player1, player2, score1, score2, date, time , function (result) {
            let info = {};
            // 201 -> created return id
            if(result.statusRequest == 201){
                info.statusRequest = 201;
                info.body = {id: result.id};
            // 403 -> erreur dans la base
            }else if(result.statusRequest == 403){
                info.statusRequest = 403;
                info.body = {message: result.erreur};
            // 500 -> other probleme
            }else{
                info.statusRequest = 500;
                info.body = {message: 'restart after'};
            }  
            callback( info );
        });
    }
         
}