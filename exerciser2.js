/**
 * 
 */

angular.module('myApp', []).controller('uebungCtrl', function($scope) {
$scope.name = '';
$scope.typ = '';
$scope.uebungen =  [{id:1, name:'Dehnung', typ:"WarmUp" }];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 

$scope.editUebung = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.name = '';
    $scope.typ = '';
  } else {
    $scope.edit = false;
    $scope.name = $scope.uebungen[id-1].name;
    $scope.typ = $scope.uebungen[id-1].typ; 
  }
};

$scope.saveUebung = function(){
	$scope.uebungen.push({id:2, name:$scope.name, typ:$scope.typ});
};

$scope.$watch('name',function() {$scope.test();});
$scope.$watch('typ',function() {$scope.test();});

$scope.test = function() {
  
$scope.incomplete = false;
  if ($scope.edit && (!$scope.name.length ||
  !$scope.typ.length )) {
     $scope.incomplete = true;
  }
}

});

