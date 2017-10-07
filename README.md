Design Document for CalHacks 4.0
================================

## Group Members

* Hao Le <haole@berkeley.edu>
* Elva Chen <elvachenxy@berkeley.edu>
* Samy Raman <sraman@berkeley.edu>
* Claire Li <shengxiao.claire.li@berkeley.edu>

## Description
1. Use machine learning to predict what restaurants the user would like to try in a new area based off of:
   - Images the user selects - We use preclassified images to lower processing load on Microsoft
   - From these labels form a model and import images from random restaurants
   - Use **Microsoft customAI** image recognition to label the images
   - Choose a restaurant based on label/model score with **Synpatic** JS ML 
   - Improve model with user feedback
   - Store user models in MongoDB through **MLAB**
   - Use **OpenTable** to Reserve tables at the selected restaurant
   - **Google Location** (only show results that are within a radius)
   - (optional) Personality data (IBM Watson API)
   - (optional) Can check weather so hot noodle place for cold day, ice cream for hot day etc.

2. Front End User-Flow
   - Login via Facebook
     - **Facebook API**
   - 3x3 grids of photos for preference building and model initiation
     - Users can keep picking photos
     - This data initializes machine learning
     - Users can indicate diet preferences (vegetarian/vegan) (allergies optional)
     - Users can return to this at anytime to update their preferences
   - Machine then gives suggestions
     - Show multiple photos
     - Show Name
     - Show location on map
     - Show Reviews from OpenTable API
     - Possible Responses:
       - Reserve a table here (validates machine)
       - Maybe another time (validates machine)
       - Nah (invalidates machine)

3. (optional) Restaurants can be saved
   - User can create custom lists. For example: "dessert/authentic/etc"

4. (optional) Can predict for multiple people
   - User can add friends and the app will use their data as well for group decisions

## Technologies
1. NodeJS
2. MongoDB (MLAB)
3. Express
4. React or AngularJS
5. Synaptic (Machine Learning JavaScript Library)
6. Microsoft CustomAI (Machine Learning Image Recognition)
7. Facebook Login
8. OpenTable API
9.(optional) IBM Watson
