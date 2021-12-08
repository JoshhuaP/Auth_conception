var express = require('express');
var router = express.Router();
const RequestReaderDeleteUser  = require('../RequestReader/RequestReaderDeleteUser');

/* POST registri for delete user. */
router.post('/',(request,res) => {
    let RequestReaderDeleteUser = new RequestReaderDeleteUser();
    requestReaderDeleteUser.readData(request, function (info){
        res.status(info.statusRequest).json(info.body);
    });
    
});
module.exports = router;