import express from 'express';
import ApiRouter from '../../routes/ApiRouter.js'

export default class RouteProvider {
    constructor(app){
        this.app = app;
        this.router = express.Router();
    }
    use(){
        this.app.use('/api', new ApiRouter(this.router).routes());
    }

}