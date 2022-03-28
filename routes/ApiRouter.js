export default class ApiRouter {
    constructor(router){
        this.router = router;
    }
    routes(){
        this.router.get('/users', (req, res) => {
            res.send('users');
        });
        return this.router;
    }
}
