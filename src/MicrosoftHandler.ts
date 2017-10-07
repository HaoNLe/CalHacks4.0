'use strict';
const request = require('request-promise-native');


function callAPI (url) {
    const options = {
      uri: process.env.PREDICTION_URL,
      headers: {
        'Prediction-Key': process.env.PREDICTION_KEY,
        'Content-Type': 'application/json'
      },
      body: `{"Url": "${url}"}`
    }
  
    return request.post(options)
      .then((result) => {
        // PARSE THE RESPONSE TO FIND THE HIGHEST PREDICTION
        // const top = parseResponse(results.Predictions)

        // GET THE DATA FOR THE TOP SCORED TAG
        // const data = getTagData(top)
        console.log(JSON.parse(result));
        return JSON.parse(result)
      })
  }

callAPI("http://www.seriouseats.com/assets_c/2014/02/20140214-macaroni-and-cheese-baked-potato-broccoli-cheese-nacho-01-thumb-625xauto-383784.jpg");


function parseResponse (predictions) {
    // Loop through the array to find the top score
    var top = predictions[0]
    predictions.forEach(p => {
      if (p.Probability > top.Probability) {
        top = p
      }
    })
    return top
  }

function getTagData (top) {
    // return top.Tag;
    var link = ''
    var description = ''
    // Decide which image and description to use based on the tag passed in
    switch (top.Tag.toLowerCase()) {
      case 'lannister':
        link = '/images/lannister.png'
        description = 'I spy the Lannister sigil, always pay your debts!'
        break
      case 'stark':
        link = '/images/stark.png'
        description = 'Looks like house Stark, winter is coming!'
        break
      case 'targaryen':
        link = '/images/targaryen.png'
        description = 'Fierce like the Mother of Dragons, you just entered the Targaryen sigil!'
        break
      case '':
        link = '/images/Error.jpg'
        description = 'Oops something went wrong! Submit another link to try again!'
        break
    }
  
    // Store suggestion
    const data = {
      photo: link,
      description: description,
      probability: top.Probability
    }
  
    return data
  }