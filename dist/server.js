"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const errorHandler = require("errorhandler");
const index_1 = require("./routes/index");
const new_1 = require("./routes/new");
const recommend_1 = require("./routes/recommend");
const finish_1 = require("./routes/finish");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "pug");
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
    }
    routes() {
        let router = express.Router();
        index_1.IndexRoute.create(router);
        new_1.NewRoute.create(router);
        recommend_1.RecommendRoute.create(router);
        finish_1.FinishRoute.create(router);
        this.app.use(router);
    }
}
exports.Server = Server;
