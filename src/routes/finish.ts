import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";


/**
 * / route
 *
 * @class User
 */
export class FinishRoute extends BaseRoute {

  /**
   * Create the routes.
   *
   * @class FinishRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[FinishRoute::create] Creating finish route.");

    //add home page route
    router.get("/finish", (req: Request, res: Response, next: NextFunction) => {
      res.sendFile('finish.html');
      //new FinishRoute().index(req, res, next);
    });
  }

  /**
   * Constructor
   *
   * @class FinishRoute
   * @constructor
   */
  constructor() {
    super();
  }

  public index(req: Request, res: Response, next: NextFunction) {
    //set custom title
    this.title = "Finish Page";

    //set options
    let options: Object = { "message":"Where2Eat"};

    //render template
    this.render(req, res, "finish", options);
  }
}