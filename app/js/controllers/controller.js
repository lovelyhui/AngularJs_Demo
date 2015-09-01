var bookstoreControls = angular.module('boolstoreControls',[]);

bookstoreControls.controller('helloControl', ['$scope', function($scope){
	$scope.owner = {name: "He Hui"};
}]);

bookstoreControls.controller('boollistControl', ['$scope', function($scope){
	$scope.books=[
		{name:"AAAA", author:"author_1"},
		{name:"BBBB", author:"author_2"},
		{name:"CCCC", author:"author_3"}
	];
}]);