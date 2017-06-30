
var app = angular.module('calculatorApp', []);
app.controller('calculatorBtn', function($scope){
   	$scope.title = "The Calculator";
   	$scope.proprietary = "Adedolapo";
   	$scope.display = "";

$scope.onScreen = function(x) {
   	$scope.display +=x;

}

$scope.equal = function ()  {
	if ($scope.display !='') {
	x = $scope.display;
	x = eval (x); 
	$scope.display=x;
	}
}

$scope.inverseOf = function(){

	x=$scope.display;
	x = 1/x;
	$scope.display=x;

}


$scope.powerOfTwo=function() {

	$scope.display=eval($scope.display*$scope.display);

}

$scope.plusminus = function () {
	x=$scope.display;
	x=(x)*-1;
	x=$scope.display=x;
}

$scope.clearOne = function(){
	
	var screenNum = $scope.display;
	var len= screenNum.length-1;
	var backOne = screenNum.substring(0,len);
	$scope.display = backOne;
}
$scope.clearIt = function() {
	$scope.display= " ";

}


});

