var express = require('express');
var router = express.Router();
const RequestReaderUser  = require('../RequestReader/RequestReaderUser');

/* POST registri for add user. */
router.post('/',(request,res) => {
    let requestReaderUser = new RequestReaderUser();
    requestReaderUser.readData(request, function (info){
        res.status(info.statusRequest).json(info.body);
    });
    
});
module.exports = router;
