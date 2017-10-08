import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";

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