import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";

const tagNames = ['apple_pie', 'baby_back_ribs', 'bibimbap', 'breakfast_burrito', 'caesar_salad', 
                  'cheese_plate', 'cheese_cake', 'chicken_curry', 'chicken_quesadilla', 
                  'chicken_wings', 'chocolate_cake', 'clam_chowder', 'club_sandwhich', 'donuts',
                  'dumplings', 'eggs_benedict', 'fishvand_chips', 'french_fries', 'fried_rice', 
                  'guacamole', 'hamburger', 'hot_dog', 'ice_cream', 'macaroni_and_cheese', 
                  'nachos', 'omelette', 'onion_rings', 'pad_thai', 'pancakes', 'pho', 'pizza', 
                  'pork_chop', 'ramen', 'ravioli', 'samosa', 'sashimi', 'spaghetti', 'sushi', 
                  'tacos', 'waffles'];

/**
 * / route 9 PICTURE GRID
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
    router.get("/teach", (req: Request, res: Response, next: NextFunction) => {
      new NewRoute().teach(req, res, next);
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

  public teach(req: Request, res: Response, next: NextFunction) {
    //set custom title
    this.title = "3x3 grid";

    //set options
    let options: Object = { "message":"Where2Eat"};

    //render template
    this.render(req, res, "new", options);
  }

  public selectURLs() {
    for (let i = 0; i < 0; i++) {
      // gets random index between 0-39
      let randomIndex = Math.floor(Math.random() * 40);
      if (randomIndex === 40) {
        randomIndex = 39;
      }

      

    }
  }
}