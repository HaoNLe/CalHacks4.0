Design Document for CalHacks 4.0
================================

## Group Members

* Hao Le <haole@berkeley.edu>
* Elva Chen <elvachenxy@berkeley.edu>
* Samy Raman <sraman@berkeley.edu>
* Claire Li <shengxiao.claire.li@berkeley.edu>

## Description
1. Use machine learning to predict what restaurants the user would like to try in a new area based off of:
   - Past choices (manually input your favorite places to eat + gathered data through app usage) 
   - (optional) Personality data (IBM Watson API)
   - Google Location (only show results that are within a radius)
   - (optional) Can check weather so hot noodle place for cold day, ice cream for hot day etc.

2. Front End User-Flow
   - Login via Facebook
     - Facebook API
   - 3x3 grids of photos for preference building and model initiation
     - Users can keep picking photos
     - This data initializes machine learning
     - Users can indicate diet preferences (vegetarian/vegan) (allergies optional)
   - Machine then gives suggestions
     - Show multiple photos
     - Show Name
     - Show location on map
     - Show Reviews from OpenTable API
     - Possible Responses:
       - Reserve a table here
       - Maybe another time (validates machine)
       - Nah (invalidates machine)

3. (optional) Restaurants can be saved
   - User can create custom lists. For example: "dessert/authentic/etc"

4. (optional) Can predict for multiple people
   - User can add friends and the app will use their data as well for group decisions

## Technologies
1. NodeJS
2. MongoDB
3. Express
4. React or AngularJS
5. Machine Learning JavaScript Library (To Be Decided)
6. Facebook Login
7. (optional) IBM Watson
