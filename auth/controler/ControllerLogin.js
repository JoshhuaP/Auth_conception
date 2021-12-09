var user_dao = require('auth_db').user_dao;
const bcrypt = require('bcrypt');
const RequestReaderReturn  = require('../RequestReader/returnEnumeration/RequestReaderReturn');
PromiseCheckUsername = require("./promiseControler/promiseCheckUsername");
generateTokenForUser = require("../utils/jwt.utils").generateTokenForUser
const { once, EventEmitter } = require('events');


module.exports = class ControllerLogin{
    /**
     * @param { Cle d'identification } username 
     * @param password
     */

     async CheckPassword (username, password)
     {
        let response = {}
        const endEvent = new EventEmitter();
        let checkPromise= PromiseCheckUsername(username, password).then((AuthentificationData)=>{
            bcrypt.compare(AuthentificationData.password, AuthentificationData.hash).then(function(result){
                if(result){
                    console.log(AuthentificationData.username + " : Connection success" )
                    response.status = 201;
                    let token = generateTokenForUser(AuthentificationData.id_user);
                    response.body = {"token" : token};
                    endEvent.emit("end", 42);
                }
                else{
                    console.log(AuthentificationData.username + " : Connection failed, bad passsword")
                    response.status = 403
                    response.body = {"message" : RequestReaderReturn.AuthentificationFailed};
                    endEvent.emit("end", 42);
                }
            }).catch(function(error){
                    console.log(username + " : Connection failed, bad passsword")
                    response.status = 403
                    response.body = {"message" : RequestReaderReturn.AuthentificationFailed};
                    endEvent.emit("end", 42);
            })
              }).catch(()=>{
            console.log(username +" Connection failed, bad username");
            response.status = 403
            response.body = {"message" : RequestReaderReturn.AuthentificationFailed}
            endEvent.emit("end", 42);
        })
        await once(endEvent, "end");
        console.log(response);
        return response;
     }    
}