import RouteProvider from "./RouteProvider.js"
import MiddlewareProvider from "./MiddlewareProvider.js"
import HttpProvider from "./HttpProvider.js"
import SocketProvider from "./SocketProvider.js"

export default class Provider {
    constructor(app){
        this.app = app;
        this.providers = [
            new HttpProvider(this.app),
            // new SocketProvider(this.app),
            new MiddlewareProvider(this.app),
            new RouteProvider(this.app),
        ];
    }
    use(){
        this.providers.forEach(item => item.use(this.app));
    }
}
