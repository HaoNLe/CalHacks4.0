import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";

const imageFolder = '../images/';
const fs = require('fs');
const tagNames = ['apple_pie', 'baby_back_ribs', 'bibimbap', 'breakfast_burrito', 'caesar_salad', 
                    'cheese_plate', 'cheese_cake', 'chicken_curry', 'chicken_quesadilla', 
                    'chicken_wings', 'chocolate_cake', 'clam_chowder', 'club_sandwich', 'donuts',
                    'dumplings', 'eggs_benedict', 'fish_and_chips', 'french_fries', 'fried_rice', 
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

    //for preference submission
    router.post('/teach', (req: Request, res:Response))
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

    let fileURLs = this.getURLs();
    //set options
    let options: Object = { "message":"Where2Eat", 'urls': fileURLs};

    //render template
    this.render(req, res, "new", options);
  }

  /**
   * Selects 9 random images from our 200 pre-classified image bank
   * 
   * @return dictionary of URLs in the form of strings: '../images/<TAG>/<IMAGENAME> and Values: '0, 1,...,39'
   */
  public getURLs() {
    let fileURLs = [];
    for (let i = 0; i < 9; i++) {
        // gets random index between 0-39
        let randomIndex = Math.floor(Math.random() * 40);
        if (randomIndex === 40) {
            randomIndex = 39;
        }
        let dir = imageFolder + tagNames[randomIndex];
        
        //let dir = testFolder + tagNames[i];    
        console.log("index: " + dir);
        
        // get file names from a food folder
        let fileNames = fs.readdirSync(dir);

        // pick a random image index
        let randomFileIndex = Math.floor(Math.random() * fileNames.length);
        let fullPath = dir + '/' + fileNames[randomFileIndex];
        let entry = {'imageURL': fullPath, 'value': randomIndex};
        //console.log(entry);
        fileURLs.push(entry);
    }
    //console.log(fileURLs);
    return fileURLs;
  }
}
