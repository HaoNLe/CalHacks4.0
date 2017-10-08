'use strict';
let MongoClient = require('mongodb').MongoClient
const url = 'mongodb://calhacks:1234@ds113795.mlab.com:13795/wheretoeatdata';


/**
 * Initializes MongoDB connection and sets database/collection variables
 */
function openConnection() {
    MongoClient.connect(url, function(err, db) {
        if (db !== null && db !== undefined) {
            console.log('Connected successfully to server');
            let userDataCollection = db.collection('UserData');
        }
        else {
            console.log('openConnection failed!');
            console.log(err);
        }
    });      
}

/**
 * Pushes user model to database
 * 
 * @param {string} email email of user to push datamodel to
 * @param {RecommendationAI} userModel 
 */
function pushModel(email: string, userModel) {
    MongoClient.connect(url, function(err, db) {
        if (db !== null && db !== undefined) {
            console.log('Connected successfully to server');
            let userDataCollection = db.collection('UserData');
            
            userDataCollection.insert({'email': email, 'UserData': userModel.getData()}, function(err, result) {
                if (!err) {
                    console.log('userModel inserted for: ' + email);
                }
                else {
                    console.log('ERROR: ' + err);
                }
            });
            db.close();            
        }
    });
}

/**
 * Gets a user's data model
 * 
 * @param {string} email email of user to search for
 * @return {RecommendationAI} returns user model if user has one
 */
function pullModel(email: string) {
    MongoClient.connect(url, function(err, db) {
        if (db !== null && db !== undefined) {
            console.log('Connected successfully to server');
            
            let userDataCollection = db.collection('UserData');
            console.log("Hi");
            
            userDataCollection.findOne({'email': email}, function(err, result) {
                if (!err) {
                    console.log('userModel retrieved for: ' + email);
                    console.log(result);
                    return result;
                }
                else {
                    console.log('ERROR: ' + err);
                    return null;
                }
            });
            db.close();                        
        }
    });
}


//const RecommendationAI = require('./RecommendationAI');
//let model = new RecommendationAI();
/*
model.setData([
    {
        input: [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        output: [1]
    },
    {
        input: [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        output: [0]
    },
    {
        input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],    
        output: [1]
    }
])
*/
//pushModel("haole@berkeley.edu", model);

//let model = pullModel('haole@berkeley.edu');