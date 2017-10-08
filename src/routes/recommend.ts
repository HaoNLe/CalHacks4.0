import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import request = require("request");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const path = require('path');
import { GoogleClass } from "../googleAPI";


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
    console.log("[RecommendRoute::create] Creating recommend route.");

    //add recommend page route
    router.get("/recommend",  function(req: Request, res: Response) {
      res.sendFile(path.join(__dirname, '../public', 'recommend.html'));
        //new RecommendRoute().recommend(req, res, next);
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

  public recommend(req: Request, res: Response, next: NextFunction) {
    var goo = new GoogleClass();
    goo.loadJSON(function createJSONText(){
      var jsonText='[{"url": "http://annawu.com/blog/wp-content/uploads/2013/09/julias_46-2.jpg", "tag": "842a8e4b303133d43cd802ec3c01bc55d8d87fb2"}, \
      {"url": "http://www.comalberkeley.com/rusticwoodfired/wp-content/uploads/2013/05/comal-food-23-copy-1024x680.jpg", "tag": "614a2e4e873836254671e65b966853e930f5e9b9"}, \
      {"url": "https://s3-media2.fl.yelpcdn.com/bphoto/5SzVsOBE-aUGBXBdFi6a-A/348s.jpg", "tag": "0a15b815a0f73e9db5cc1293570709379b0d8249"}, \
      {"url": "https://s3-media3.fl.yelpcdn.com/bphoto/9W6N2KVjzisyN6rA-G8b6Q/348s.jpg", "tag":"19ad91fba2fbb647d5e6ee4d650fdfa4394ebe83"}]';
  });
    
    //set custom title
    this.title = "Recommend Page";

    //set options
    let options: Object = { "message":"Where2Eat"};

    //render template
    this.render(req, res, "recommend", options);
  }
}