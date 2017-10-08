var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

export class GoogleClass{
    public loadJSON(callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Here the callback gets implemented
                    var object = JSON.parse(xhr.responseText);
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
    public loadDeets(id, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Here the callback gets implemented
                    var object= JSON.parse(xhr.responseText);
                    callback(object);
                } else {
                    console.log("it's not fucking working", xhr.status, xhr.readyState);
                }
            }
        };
        xhr.open("GET", "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyAkGA1oMCwKr0eXNfvDGKHt-oDP4j107vk"+id, true);
        xhr.send();
        xhr.onreadystatechange();
    }
}