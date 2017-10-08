import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { NewRoute } from "./new";
import { MongoHandler } from "../MongoHandler";
const path = require('path');
import request = require("request");

/**
 * / route LOGIN page
 *
 * @class User
 */
export class IndexRoute extends BaseRoute {

  /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[IndexRoute::create] Creating index route.");

    //add home page route
    router.get("/", function(req: Request, res: Response) {
      res.sendFile('index.html');
      //res.sendFile(path.join(__dirname, '../assets', 'style.css'));
      //new IndexRoute().index(req, res, next);
    });

    router.post("/", function(req: Request, res:Response) {
      console.log("Check MONGODB here before either staying or moving to preferences.html");
      let params = JSON.stringify(req.body);
      let database = new MongoHandler();
      database.pullModel(req.body.user);
      console.log('params: ' + params);
      if (true) {
        //res.redirect('/teach');
        res.send({ redirect: '/teach' })
        res.end();  
      }
      // else {
      //   res.sendFile('index.html');
      // }
      //res.sendFile('preferences.html');
    })
  }

  /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
  constructor() {
    super();
  }

  public index(req: Request, res: Response, next: NextFunction) {
    //render template
    this.render(req, res, "index");
  }
}