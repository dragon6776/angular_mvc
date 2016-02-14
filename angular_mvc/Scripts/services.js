myApp.factory('productService', ['$resource', function($resource){
	// return $resource('/odata/Products/:', {}, {
	// 	query: {
	// 		method: 'GET',
	// 		//params:{ ProductId: '' },
	// 		isArray: true
	// 	}
	// });

	return $resource('/odata/Products', function(data){
		debugger;
	});
}]);