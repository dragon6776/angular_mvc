var myApp = angular.module('myApp', ['ngRoute', 'ngResource', 'blockUI']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/product', {
			templateUrl: '/product'
		}).
		when('/category', {
			templateUrl: '/category'
		}).
		otherwise({
			redirectTo: '/home'
		})
}]);

myApp.config(function(blockUIConfig) {

  // Change the default overlay message
  blockUIConfig.message = 'Please stop clicking!';

  // Change the default delay to 100ms before the blocking is visible
  blockUIConfig.delay = 100;

});
