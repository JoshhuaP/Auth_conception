const ControllerLogin = require('../controler/ControllerLogin.js');
const CheckPassword = require('../controler/ControllerLogin.js');
const { loginCheck } = require('../utils/passwd.js');
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
        if("user" in data){
          this.username = data.user;
        }
        else{
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
          this.info.body = {"message" : RequestReaderReturn.DataRequestInvalid.toString()};
          return false;
        }
        return true;
    }

    /** Receives the request and answer it 
     * @return 0 if 
     */
    async ReadRequest(request, res){
        if(!this.ReadData(request))
        {
          res.status(this.info.status)
          res.send(this.info.body);
          return RequestReaderReturn.DataRequestInvalid;
        }
        let controllerLogin = new ControllerLogin();
        this.info = await controllerLogin.CheckPassword(this.username, this.password)
        res.status(this.info.status)
        res.send(this.info.body);
        return RequestReaderReturn.RequestValid

    }
}