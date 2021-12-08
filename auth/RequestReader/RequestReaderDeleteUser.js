const ControleurUser  = require('../controler/delete_user');

module.exports = class RequestReaderDeleteUser{

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
            info.status = 400;
            info.body = {message: 'accept : mail=test@test.fr&pseudo=test&pwd=testmdp'};
            callback( info );
            return;
        }
        
        //request the controleur
        let controleurUser = new ControleurUser();
        controleurUser.deleteUserToDB( mail , function (result) {
            let info = {};
            // 201 -> created return id
            if(result.statusRequest == 201){
                info.statusRequest = 201;
                info.body = {id: result.id};
            // 403 -> already exist return id
            }else{
                info.statusRequest = 500;
                info.body = {message: 'restart after'};
            }  
            callback( info );
        });
    }
         
}