
class RequestReaderRegister {

    readData(request){
        //get the information in the request
        info = request.query;
        mail = info.mail;
        pseudo = info.pseudo;
        pasword = info.pwd;

        info = {}
        if(mail == null || pseudo == null || pasword == null){
            info.status = 400;
            info.body = {message: 'accept : mail=test@test.fr&pseudo=test&pwd=testmdp'};
            return info;
        }
        //request the controleur
        result = addUserToBD(mail, pseudo, password);
        // 201 -> created return id
        if(result.statusRequest == 201){
            info.status = 201;
            info.body = {id: result.id};
        // 403 -> already exist return id
        }else if(statusRequest == 403){
            info.status = 403;
            info.body = {id: result.id};
        // 500 -> other probleme
        }else{
            info.status = 500;
            info.body = {message: 'restart after'};
        }  
        return info;
    }
         
}