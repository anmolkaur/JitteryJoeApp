var jitteryApp = angular.module('jitteryApp', []);

jitteryApp.controller('ReviewListCtrl', function ($scope, $http) {


 /* $scope.coffees1 = [
    {"name":"After Dinner", "description": "lorpem ipsum", "subcategories": [{"bestRated":"Yes", "available":"No", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"Borque Newswatch", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"CN Tower of Power", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"Connoisseur Estates", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"Columbian", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"Dutch Trader","description": "lorpem ipsum", "subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"Fordnation Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"French Roast", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"Hawaii Kona", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"House Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"Italian Roast","description": "lorpem ipsum", "subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"Lionel Roastie", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"Mocca-Java", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"Raggae Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"Ruth Roast", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"Toronto Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"Tropic of Coffee", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] },
    {"name":"World Tour Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes":"Yes", "roast":"Light"}] }
    ];

    var coffees1 = $scope.coffees1; */

    $scope.bestRated = ["bestRated"];


    //Subcategories are: bestRated, available, decaf, fairTrade, 
    $scope.coffees = [
      {"name":"After Dinner", 
       "description": "lorpem ipsum", 
       "roast": "Light", 
       "subcategories": ["bestRated", "available"], 
       "images":
          ["images/ICON_PACKAGE/star_icon_brown.gif",
          "images/ICON_PACKAGE/shield_icon_brown.gif", 
          "images/ICON_PACKAGE/decaf_icon_beige.gif", 
          "images/ICON_PACKAGE/scale_icon_beige.gif"]},
      {"name":"Borque Newswatch", 
        "description": "lorpem ipsum", 
        "roast": "Light", 
        "subcategories": [ "available"], 
        "images":
          ["images/ICON_PACKAGE/star_icon_beige.gif", 
          "images/ICON_PACKAGE/shield_icon_brown.gif",
          "images/ICON_PACKAGE/decaf_icon_beige.gif", 
          "images/ICON_PACKAGE/scale_icon_beige.gif"]},
      {"name":"CN Tower of Power", 
        "description": "lorpem ipsum", 
          "roast": "Light",
          "subcategories": ["available", "fairTrade"], 
          "images":
          ["images/ICON_PACKAGE/star_icon_beige.gif", 
          "images/ICON_PACKAGE/shield_icon_brown.gif", 
          "images/ICON_PACKAGE/decaf_icon_beige.gif", 
          "images/ICON_PACKAGE/scale_icon_brown.gif"] },
      {"name":"Connoisseur Estates", "description": "lorpem ipsum", "roast": "Light", "subcategories": ["available", "decaf", "fairTrade"], "images":["images/ICON_PACKAGE/star_icon_beige.gif", "images/ICON_PACKAGE/shield_icon_brown.gif", "images/ICON_PACKAGE/decaf_icon_brown.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"]},
      {"name":"Columbian", "description": "lorpem ipsum", "roast": "Light", "subcategories": ["bestRated", "available",  "fairTrade"], "images":["images/ICON_PACKAGE/star_icon_brown.gif", "images/ICON_PACKAGE/shield_icon_brown.gif", "images/ICON_PACKAGE/decaf_icon_beige.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"]},
      {"name":"Dutch Trader",
       "description": "lorpem ipsum",
       "roast": "Light",
       "subcategories": ["available",  "fairTrade"], "images":["images/ICON_PACKAGE/star_icon_beige.gif", "images/ICON_PACKAGE/shield_icon_brown.gif", "images/ICON_PACKAGE/decaf_icon_beige.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"]},
      {"name":"Fordnation Blend", "description": "lorpem ipsum", "roast": "Medium", "subcategories": ["available", "decaf", "fairTrade"],"images":["images/ICON_PACKAGE/star_icon_beige.gif", "images/ICON_PACKAGE/shield_icon_brown.gif", "images/ICON_PACKAGE/decaf_icon_brown.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"] },
      {"name":"French Roast", "description": "lorpem ipsum", "roast": "Medium", "subcategories": ["bestRated", "available",  "fairTrade"], "images":["images/ICON_PACKAGE/star_icon_brown.gif", "images/ICON_PACKAGE/shield_icon_brown.gif", "images/ICON_PACKAGE/decaf_icon_beige.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"]},
      {"name":"Hawaii Kona", "description": "lorpem ipsum", "roast": "Medium", "subcategories": ["bestRated", "available", "fairTrade"], "images":["images/ICON_PACKAGE/star_icon_brown.gif", "images/ICON_PACKAGE/shield_icon_brown.gif", "images/ICON_PACKAGE/decaf_icon_beige.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"]},
      {"name":"House Blend", "description": "lorpem ipsum", "roast": "Medium", "subcategories": ["available", "fairTrade"], "images":["images/ICON_PACKAGE/star_icon_beige.gif", "images/ICON_PACKAGE/shield_icon_brown.gif", "images/ICON_PACKAGE/decaf_icon_beige.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"]},
      {"name":"Italian Roast", "description": "lorpem ipsum", "roast": "Medium", "subcategories": ["available",  "fairTrade"], "images":["images/ICON_PACKAGE/star_icon_beige.gif", "images/ICON_PACKAGE/shield_icon_brown.gif", "images/ICON_PACKAGE/decaf_icon_beige.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"]},
      {"name":"Lionel Roastie", "description": "lorpem ipsum", "roast": "Medium", "subcategories": [ "available", "decaf", "fairTrade"], "images":["images/ICON_PACKAGE/star_icon_beige.gif", "images/ICON_PACKAGE/shield_icon_brown.gif", "images/ICON_PACKAGE/decaf_icon_brown.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"]},
      {"name":"Mocca-Java", "description": "lorpem ipsum", "roast": "Dark", "subcategories": ["bestRated",   "fairTrade"], "images":["images/ICON_PACKAGE/star_icon_brown.gif", "images/ICON_PACKAGE/shield_icon_beige.gif", "images/ICON_PACKAGE/decaf_icon_beige.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"]},
      {"name":"Raggae Blend", "description": "lorpem ipsum", "roast": "Dark", "subcategories": ["bestRated",  "fairTrade"], "images":["images/ICON_PACKAGE/star_icon_brown.gif", "images/ICON_PACKAGE/shield_icon_beige.gif", "images/ICON_PACKAGE/decaf_icon_beige.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"]},
      {"name":"Toronto Blend", "description": "lorpem ipsum", "roast": "Dark", "subcategories": [   "fairTrade"], "images":["images/ICON_PACKAGE/star_icon_beige.gif", "images/ICON_PACKAGE/shield_icon_beige.gif", "images/ICON_PACKAGE/decaf_icon_beige.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"]},
      {"name":"Tropic of Coffee", "description": "lorpem ipsum", "roast": "Dark", "subcategories": [ "decaf", "fairTrade"], "images":["images/ICON_PACKAGE/star_icon_beige.gif", "images/ICON_PACKAGE/shield_icon_beige.gif", "images/ICON_PACKAGE/decaf_icon_brown.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"]},
      {"name":"World Tour Blend", "description": "lorpem ipsum", "roast": "Dark", "subcategories": [ "fairTrade"], "images":["images/ICON_PACKAGE/star_icon_beige.gif", "images/ICON_PACKAGE/shield_icon_beige.gif", "images/ICON_PACKAGE/decaf_icon_beige.gif", "images/ICON_PACKAGE/scale_icon_brown.gif"]}
      
      ];

    var coffees = $scope.coffees;
console.log(coffees);
   




  // Set our reviews object to be empty by default.
  $scope.reviews = [];

  // JSONP to get the current ratings.
  $http.jsonp('http://jitteryjoes.myplanetfellowship.com/api/ratings.jsonp?callback=JSON_CALLBACK').
    success(function(data, status) {
      $scope.reviews = data;
    });

  // Add a new rating to the list.
  $scope.addNewRating = function () {
    // Get the form data from the scope.
    var review = $scope.review;

    // Prepare the data.
    var nodeData = {
      'type': 'review',
      'field_review_comment': {'und': [{'value': review.comment} ]},
      'field_review_rating': {'und': [{'value': review.rating} ]},
      'field_review_item': {'und': {'value': review.item}},
      'field_origin_app': {'und': [{'value': 'TEAM PLATYPUS'}]}
    };

    // POST the data and create a node.
    $http({url: 'http://jitteryjoes.myplanetfellowship.com/api/node.json', method: 'POST', data: nodeData}).
      success(function(data, status) {
        // Setup data object.
        var review = $scope.review;
        // Add our app id and date in seconds.
        review.app = 'TEAM PLATYPUS';
        var d = new Date();
        review.node_created = (d.getTime() / 1000);

        // Add the review to the reviews array.
        $scope.reviews.unshift (review);

        // Reset form vars.
        $scope.review = {};
      });
  }

  // Set our "signupSent" flag to false by default.
  $scope.signupSent = false;

  // Add a newsletter signup.
  $scope.addNewSignup = function () {
    // Get the form data from the scope.
    var user = $scope.user;

    // Prepare the data.
    var nodeData = {
      'type': 'signup',
      'field_user_name': {'und': [{'value': user.name} ]},
      'field_user_email': {'und': [{'value': user.email} ]},
      'field_origin_app': {'und': [{'value': 'TEAM PLATYPUS'}]}
    };

    // POST the data and create a node.
    $http({url: 'http://jitteryjoes.myplanetfellowship.com/api/node.json', method: 'POST', data: nodeData}).
      success(function(data, status) {
        // Set our "signupSent" flag.
        $scope.signupSent = true;
      });
  }
});
