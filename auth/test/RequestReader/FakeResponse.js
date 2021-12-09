module.exports= class FakeResponse{
    Status = "";
    Body= "";
    status(value){
        this.Status = value
    }
    send(value){
        this.Boddy = value;
    }
}