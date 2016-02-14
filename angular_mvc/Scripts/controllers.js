
myApp.controller('categoryController', function($scope, $http){
	$scope.test = "Xin chao huy !!!";

	$scope.categories = [];

	//$scope.listCategories = [];
	$http.get('/odata/Categories').
		success(function(data){
			$scope.categories = data.value;
		}).
		error(function(){
			alert("Error!!!");
		});
});

myApp.controller('productController', function($scope, $http, $resource){
	$scope.title = "Danh sach san pham";
	var list = $resource('/odata/:pr', {}, {
		query: {
			method: 'GET', params: {pr:'Products'}
		}
	});

	list.query(function(data){
		debugger;
	});

	//$scope.listCategories = [];
	// $http.get('/odata/Products').
	// 	success(function(data){
	// 		$scope.products = data.value;
	// 	}).
	// 	error(function(){
	// 		alert("Error!!!");
	// 	});
});