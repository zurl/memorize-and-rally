const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000;
let app=express();

app.use(express.static(path.join(__dirname,"public")));

app.listen(PORT,()=>{
    console.log(`The  server is listening on port ${PORT}:`);
});
