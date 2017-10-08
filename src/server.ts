import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as express from "express";
import * as path from "path";
import errorHandler = require("errorhandler");
import {IndexRoute} from "./routes/index";
import {NewRoute} from "./routes/new";
import {RecommendRoute} from "./routes/recommend";
import {FinishRoute} from "./routes/finish";

export class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app=express();
        this.config();
        this.routes();
    }

    public config() {
        this.app.use(express.static(path.join(__dirname, "public")));
        
        this.app.get('/style.css', function(req, res) {
            res.sendFile('assets/style.css');            
          });

        this.app.get('/stylefinish.css', function(req, res) {
            res.sendFile('assets/stylefinish.css');            
          });

        this.app.use(logger("dev"));
          
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });
      
        this.app.use(errorHandler());
    }

    public routes(){
            let router: express.Router = express.Router();

            IndexRoute.create(router);
            NewRoute.create(router);
            RecommendRoute.create(router);
            FinishRoute.create(router);

            this.app.use(router);
    }
}