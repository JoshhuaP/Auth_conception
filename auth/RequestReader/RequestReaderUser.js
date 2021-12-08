const ControleurUser  = require('../controler/user');

module.exports = class RequestReaderUser {

    /**
     * 
     * @param { la requette post } request 
     */
    readData(request, callback){
        let body = request.body;
        let mail = body.mail;
        let pseudo = body.pseudo;
        let password = body.pwd;
        if(mail == null || pseudo == null || password == null){
            let info = {}
            info.statusRequest = 400;
            info.body = {message: 'accept : mail=test@test.fr&pseudo=test&pwd=testmdp'};
            callback( info );
            return;
        }
        
        //request the controleur
        let controleurUser = new ControleurUser();
        controleurUser.addUserToDB(mail, pseudo, password , function (result) {
            let info = {};
            // 201 -> created return id
            if(result.statusRequest == 201){
                info.statusRequest = 201;
                info.body = {id: result.id};
            // 403 -> already exist return id
            }else if(result.statusRequest == 403){
                info.statusRequest = 403;
                info.body = {id: result.id};
            // 500 -> other probleme
            }else{
                info.statusRequest = 500;
                info.body = {message: 'restart after'};
            }  
            callback( info );
        });
    }
         
}