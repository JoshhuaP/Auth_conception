const RequestReaderReturn  = require('./returnEnumeration/RequestReaderReturn.js');

module.exports = class RequestReaderLogin{
  /**Username read in the request */
    username = null;
    /**Password read in the request */
    password = null;
    info = {};
    /**Read the request and define username and password
     * @return false if the request hasn't the right data, otherwise return true
     */
    ReadData(request){
        let data = request.body;
        console.log(data)
        if("user" in data)
        {
          this.username = data.user;
        }
        else
        {
          console.log("Undefined username")
          this.info.status = 400;
          this.info.body = {"message" : RequestReaderReturn.DataRequestInvalid.toString()};
          return false;
        }

        if("pwd" in data)
        {
          this.password = data.pwd;      
        }
        else
        {
          
          this.info.status = 400;
          console.log("Undefined password")
          this.info.body = {"message" : RequestReaderReturn.DataRequestInvalid.toString()};
          return false;
        }
        return true;
    }

    /**
     * Ask at the controler to check the authentication and get the token or an error message
     */
    askAuthentification(){
        let authentification = {} // get the token
        authentification.status = 200
        authentification.body = {"token": "digjdojgiodfjgodjgoidjgodj554gdg"}
    }

    /** Receives the request and answer it 
     * @return 0 if 
     */
    ReadRequest(request){
        if(!this.ReadData(request))
        {
            return RequestReaderReturn.DataRequestInvalid;
        }
        let authentification = this.askAuthentification();
        this.info.status =  authentification.status // Authentication
        this.info.body = authentification.body
        return RequestReaderReturn.RequestValid
    }
}