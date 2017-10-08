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
    var auth = request.get('https://platform.otqa.com/sync/directory').auth(null, null, true, '93f3db26-0929-4a96-9d27-3661cbbfb370');
    request(auth, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body)
      }
    });
    //log
    console.log("[IndexRoute::create] Creating index route.");

    //add home page route
    router.get("/", function(req: Request, res: Response) {
      res.sendFile(path.join(__dirname, '../views', 'index.html'));
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