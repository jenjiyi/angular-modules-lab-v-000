function MainController($scope) {
  $scope.name = "Milly";
}

angular
  .module('app')
  .controller('MainController', MainController);
