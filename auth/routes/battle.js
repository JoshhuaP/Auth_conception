var express = require('express');
var router = express.Router();
const RequestReaderBattle  = require('../RequestReader/RequestReaderBattle');

/* POST registri for add user. */
router.post('/',(request,res) => {
    let requestReaderBattle = new RequestReaderBattle();
    requestReaderBattle.readData(request, function (info){
        res.status(info.statusRequest).json(info.body);
    });
    
});
module.exports = router;
