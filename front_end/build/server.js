"use strict";var path=require("path"),express=require("express"),app=express(),staticPath=path.join(__dirname,"/");app.use(express.static(staticPath)),app.set("port",process.env.PORT||3e3);var server=app.listen(app.get("port"),(function(){console.log("listening")}));