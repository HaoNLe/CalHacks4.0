var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

export class GoogleClass{
    public var : object;
    public loadJSON(callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Here the callback gets implemented
                    this.object = JSON.parse(xhr.responseText);
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
}