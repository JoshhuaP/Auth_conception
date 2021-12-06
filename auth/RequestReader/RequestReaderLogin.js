module.exports = class RequestReaderLogin{
    username = null;
    password = null;

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
    ReadRequest(request, res, next){
        if(!this.ReadData(request))
        {
            res.statusCode = 400;
            res.send("badRequest");
            return -1;
        }
        // Authentification
        let token = "token"// generation of token
        res.status(200)
      res.send(token);
      return 0;
    }
}