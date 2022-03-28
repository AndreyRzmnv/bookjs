export default class SocketProvider {
    constructor(app){
        this.app = app;
        this.router = express.Router();
    }
    use(){
        this.app.use('/api', new ApiRouter(this.router).routes());
    }

}