var jitteryApp = angular.module('jitteryApp', []);

jitteryApp.controller('ReviewListCtrl', function ($scope, $http) {


  $scope.coffees = [
    {"name":"After Dinner", "description": "lorpem ipsum", "subcategories": [{"bestRated":"Yes", "available":"No", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Borque Newswatch", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"CN Tower of Power", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Connoisseur Estates", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Columbian", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Dutch Trader","description": "lorpem ipsum", "subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Fordnation Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"French Roast", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Hawaii Kona", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"House Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Italian Roast","description": "lorpem ipsum", "subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Lionel Roastie", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Mocca-Java", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Raggae Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Ruth Roast", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Toronto Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Tropic of Coffee", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"World Tour Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] }
    ];

    var coffees = $scope.coffees;

    $scope.bestRated = ["bestRated"];

    $scope.coffees1 = [
    {"name":"After Dinner", "description": "lorpem ipsum", "subcategories": ["bestRated", "available", "decaf"] },
    {"name":"Borque Newswatch", "description": "lorpem ipsum","subcategories": ["bestRated", "decaf"] }
    /*{"name":"CN Tower of Power", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Connoisseur Estates", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Columbian", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Dutch Trader","description": "lorpem ipsum", "subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Fordnation Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"French Roast", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Hawaii Kona", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"House Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Italian Roast","description": "lorpem ipsum", "subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Lionel Roastie", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Mocca-Java", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Raggae Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Ruth Roast", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Toronto Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"Tropic of Coffee", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] },
    {"name":"World Tour Blend", "description": "lorpem ipsum","subcategories": [{"bestRated":"Yes", "available":"Yes", "decaf":"Yes", "fairTrade":"Yes", "limtedEdition":"Yes", "roast":"Light"}] }*/
    ];

    var coffees1 = $scope.coffees1;
    $scope.filterBy = "available";
    var no = "No";
    var yes = "Yes";




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
