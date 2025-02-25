const http = require("http");
const path = require('path');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser= require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded(
    {
        extended:false,
    }
));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404HTML.html'));
});

const server = http.createServer(app);

server.listen(3000);
