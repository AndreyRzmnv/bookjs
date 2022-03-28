import http from "http";

export default class HttpProvider {
    constructor(app){
        this.app = app;
        this.server = http.createServer(this.app);
    }
    use(){
        this.server.listen(process.env.APP_PORT, () => {
            console.log('server started');
        });
    }

}