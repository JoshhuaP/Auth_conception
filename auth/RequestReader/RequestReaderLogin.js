const RequestReaderLoginReturn  = require('./returnEnumeration/RequestReaderLoginReturn.js');

module.exports = class RequestReaderLogin{
  /**Username read in the request */
    username = null;
    /**Password read in the request */
    password = null;

    /**Read the request and define username and password
     * @return false if the request hasn't the right data, otherwise return true
     */
    ReadData(request){
        let data = request.body;
        if("user" in data)
        {
          this.username = data.user;
        }
        else
        {
          console.log("Undefined username")

          return false;
        }
        if("pwd" in data)
        {
          this.password = data.pwd;      
        }
        else
        {
          console.log("Undefined password")
          res.statusCode = 400;
          res.send("badRequest");
          return false;
        }
        return true;
    }

    /** Receives the request and answer it 
     * @return 0 if 
     */
    ReadRequest(request, res, next){
        if(!this.ReadData(request))
        {
            res.statusCode = 400;
            res.send(RequestReaderLoginReturn.DataRequestInvalid.toString());
            return RequestReaderLoginReturn.DataRequestInvalid;
        }
        
        let Authentification = true; // Authentification
        if(Authentification)
        {
          let token = ""// generation of token
          if(token == "")
          {
            res.status(500)
            res.send(RequestReaderLoginReturn.GenerationTokenFailed.toString());
            return RequestReaderLoginReturn.GenerationTokenFailed;
          }
          else
          {
            res.status(200)
            res.send(token);   
            return RequestReaderLoginReturn.AuthentificationValid;         
          }
        }
        else
        {
          res.status(403)
          res.send(RequestReaderLoginReturn.AuthentificationFailed.toString());
          return RequestReaderLoginReturn.AuthentificationFailed;
        }
        
    }
}