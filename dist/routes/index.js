"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const request = require("request");
class IndexRoute extends route_1.BaseRoute {
    static create(router) {
        var auth = request.get('https://platform.otqa.com/sync/directory').auth(null, null, true, '93f3db26-0929-4a96-9d27-3661cbbfb370');
        request(auth, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
            }
        });
        console.log("[IndexRoute::create] Creating index route.");
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = "Home Page";
        let options = { "message": "Where2Eat" };
        this.render(req, res, "index", options);
    }
}
exports.IndexRoute = IndexRoute;
