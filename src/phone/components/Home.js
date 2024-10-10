$scope.intervalPromise = $interval(function() {
  $scope.app.params['pressureDisplay'] = (Math.random() * 100).toFixed(2)+'bar';
  $scope.app.params['temperatureDisplay'] = (Math.random() * 180 + 20).toFixed(2)+'°C';
}
                                   , 1000);
$scope.intervalPromise1 = $interval(function() {
  $scope.view.wdg["modelItem-16"]["rz"]-=4;
  $scope.view.wdg["modelItem-20"]["rz"]-=4;
  $scope.view.wdg["modelItem-21"]["rz"]-=4;
  $scope.view.wdg["modelItem-22"]["rz"]-=4;
}
                                   , 100);
