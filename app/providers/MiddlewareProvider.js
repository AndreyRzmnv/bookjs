export default class MiddlewareProvider {
    constructor(app){
        this.app = app;
    }
    use(){
        this.app.use(function(req, res, next) {
            next()
            // res.send(404)
        });
    }
}