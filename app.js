'use strict'
import 'dotenv/config'
import express from "express";
import Provider from "./app/providers/Provider.js";

export default class App{
    constructor(){
        this.app = express();
    }
    createServer(){
        new Provider(this.app).use();
    }
}
new App().createServer();



















// app.use(MiddlewareProvider());
// const httpServer = createServer(app);
// class App {
//   constructor() {
//     this.server = express();
//     this.httpServer = createServer(this.server);
//   }
//   providers(){

//   }
// }


// app.use('/', parseForm, csrfProtection, (req, res, next) => {
//   res.locals.user = req.user;
//   res.locals.csrfToken = req.csrfToken();
//   res.locals.plugins = plugins;
//   next();
// }, Router);


// const io = new Server(httpServer, { 
//   cors: {
//     origin: "*",
//   }
// });
// io.on("connection", (socket) => {
//   console.log('connection');
//   socket.on("message", (request, response) => {
//     console.log(request);
//   })
// });

