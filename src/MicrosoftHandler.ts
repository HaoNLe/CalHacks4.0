'use strict';
const request = require('request-promise-native');

/**
 * Calls Microsoft custom AI API 
 * 
 * @param {string} url the url of an image
 * @return {string} Top tag for an image
 */
function callAPI (url: string) {
    // hard coded URI and prediction key
    const options = {
      uri: "https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/9f0308d6-9ff8-445a-be69-aa6ad1025c41/url",
      headers: {
        'Prediction-Key': "753d96c2180f4b27be9149445586d201",
        'Content-Type': 'application/json'
      },
      body: `{"Url": "${url}"}`
    };
  
    let tag = request.post(options)
      .then((result) => {
        
        console.log(JSON.parse(result));
        let predictions = JSON.parse(result).Predictions;

        // Loop through tags and return highest tag
        let top = predictions[0];
        predictions.forEach(p => {
          if (p.Probability > top.Probability) {
            top = p;
          }
        })
        return top.Tag;
      })
    return tag;
  }

// callAPI("http://www.seriouseats.com/assets_c/2014/02/20140214-macaroni-and-cheese-baked-potato-broccoli-cheese-nacho-01-thumb-625xauto-383784.jpg");

// Loops through restaurants and classifies them [{rid: int, url: string}]
async function classifyRestaurants (restaurants) {
    let tags = [];
    for (let i = 0; i < restaurants.length; i++) {
        let r = restaurants[i];
        let tag = await callAPI(r.url);
        tags.push({'rid': r.website, 'tag': tag});
    }
    return tags;
}


let restaurantList = [
    {'rid': 1, 'url': 'http://www.seriouseats.com/recipes/assets_c/2016/01/20160206-fried-rice-food-lab-68-thumb-1500xauto-429632.jpg'},
    {'rid': 2, 'url': 'http://www.seriouseats.com/assets_c/2014/02/20140214-macaroni-and-cheese-baked-potato-broccoli-cheese-nacho-01-thumb-625xauto-383784.jpg'}
];
async function test() {
    let test = await classifyRestaurants(restaurantList);
    //let test =  classifyRestaurants(restaurantList);    
    console.log('test');
    console.log(test);
}

test();