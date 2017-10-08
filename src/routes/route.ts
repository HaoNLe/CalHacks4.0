import {NextFunction, Request, Response} from "express";
var ejs = require("ejs");

export class BaseRoute {
    protected title: string;
    private scripts: string[];

    constructor(){
        this.title = "Where2Eat";
        this.scripts = [];
    }

    public addScript(src: string): BaseRoute {
        this.scripts.push(src);
        return this;
    }

    public render(req: Request, res: Response, view: string, options?: Object) {
        res.locals.BASE_URL = "/";
        res.locals.scripts = this.scripts;
        res.locals.title = this.title;
        res.render(view, options);
    }
}