const serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(3000, function(){
    console.log("ok");
})