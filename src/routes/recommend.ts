import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";


/**
 * / route
 *
 * @class User
 */
export class RecommendRoute extends BaseRoute {

  /**
   * Create the routes.
   *
   * @class RecommendRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[IndexRoute::create] Creating index route.");

    //add recommend page route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new RecommendRoute().index(req, res, next);
    });
  }

  /**
   * Constructor
   *
   * @class RecommendRoute
   * @constructor
   */
  constructor() {
    super();
  }

  public index(req: Request, res: Response, next: NextFunction) {
    //set custom title
    this.title = "Recommend Page";

    //set options
    let options: Object = { "message":"Where2Eat"};

    //render template
    this.render(req, res, "recommend", options);
  }
}