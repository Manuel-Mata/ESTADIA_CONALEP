import express, {Application} from 'express'

class Server {
    private app : Application;
    private port : string;

    constructor(){
        this.app = express();
        this.port = '3000';
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Corriendo en el puerto ', this.port);
        });
    }
}

export default Server;