import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";


/**
 * / route
 *
 * @class User
 */
export class NewRoute extends BaseRoute {

  /**
   * Create the routes.
   *
   * @class NewRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[NewRoute::create] Creating new route.");

    //add new page route
    router.get("/new", (req: Request, res: Response, next: NextFunction) => {
      new NewRoute().index(req, res, next);
    });
  }

  /**
   * Constructor
   *
   * @class NewRoute
   * @constructor
   */
  constructor() {
    super();
  }

  public index(req: Request, res: Response, next: NextFunction) {
    //set custom title
    this.title = "New Page";

    //set options
    let options: Object = { "message":"Create new preferences"};

    //render template
    this.render(req, res, "new", options);
  }
}