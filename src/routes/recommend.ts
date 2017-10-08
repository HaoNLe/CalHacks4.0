import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import request = require("request");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


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
    router.get("/recommend", (req: Request, res: Response, next: NextFunction) => {
      new RecommendRoute().recommend(req, res, next);
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
    var object;
    
    function loadJSON(callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Here the callback gets implemented
                    object = JSON.parse(xhr.responseText);
                    callback();
                } else {
                    console.log("it's not fucking working", xhr.status, xhr.readyState);
                }
            }
        };
        xhr.open("GET", "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.871853,-122.258423&radius=2000&type=restaurant&key=AIzaSyAkGA1oMCwKr0eXNfvDGKHt-oDP4j107vk", true);
        xhr.send();
        xhr.onreadystatechange();
    }
    
    loadJSON(function printJSONObject(){
        console.log(object.results[0].name);
        });
    //set custom title
    this.title = "Recommend Page";

    //set options
    let options: Object = { "message":"Where2Eat"};

    //render template
    this.render(req, res, "recommend", options);
  }
}