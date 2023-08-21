const express = require("express")
const csp = require('express-csp-header')
const bodyParser = require("body-parser")
const path = require("path")
const app = express();
app.use(express.static(path.join(__dirname,'build')))
app.use(csp({
    policies: {
        'default-src': [csp.NONE],
        'img-src': [csp.SELF],
    }
}));
app.get("/",function (req,res){
    res.sendFile(path.join(__dirname,'build','index.html'))
})
app.listen(process.env.PORT || 8080);