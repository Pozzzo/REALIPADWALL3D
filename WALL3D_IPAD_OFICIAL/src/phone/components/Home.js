$scope.inicio=function(){
  $timeout(function(){
    $scope.view.wdg['temperatureDisplay']['text']=$scope.app.mdl['Wall_Helper'].properties['Temp1']
    $scope.view.wdg['dt-label-1']['text']=$scope.app.mdl['Wall_Helper'].properties['Temp2']
    $scope.view.wdg['pressureDisplay']['text']=$scope.app.mdl['Wall_Helper'].properties['VFD_current']
    $scope.view.wdg['dt-label-2']['text']=$scope.app.mdl['Wall_Helper'].properties['VFD_Speed_Read']
    $scope.view.wdg['dt-label-3']['text']=$scope.app.mdl['Wall_Helper'].properties['VFD_torque']
    if($scope.app.mdl['Wall_Helper'].properties['Baliza_Roja_1']==true){
      $scope.view.wdg['modelItem-3']['color']="rgb(254,10,10)"
    }
    if($scope.app.mdl['Wall_Helper'].properties['Baliza_Roja_2']==true){
      $scope.view.wdg['modelItem-23']['color']="rgb(254,10,10)"
    }
    if($scope.app.mdl['Wall_Helper'].properties['Baliza_Verde_1']==true){
      $scope.view.wdg['modelItem-13']['color']="rgb(254,254,10)"
    }
    if($scope.app.mdl['Wall_Helper'].properties['Baliza_Verde_2']==true){
      $scope.view.wdg['modelItem-24']['color']="rgb(10,254,10)"
    }
  }
           ,500);
}
angular.element(ready).document($scope.inicio)
$scope.$watch("app.mdl['Wall_Helper'].events['DataChange.Baliza_Roja_1']['eventData'][0]['newValue'][0].value", function(){
  if($scope.app.mdl['Wall_Helper'].events['DataChange.Baliza_Roja_1']['eventData'][0]['newValue'][0].value==true){
    $scope.view.wdg["modelItem-3"]["color"]="rgb(254,10,10)";
  }
  else{
    $scope.view.wdg["modelItem-3"]["color"]="rgb(150,150,150)";
  }
}
             )
$scope.$watch("app.mdl['Wall_Helper'].events['DataChange.Baliza_Roja_2']['eventData'][0]['newValue'][0].value", function(){
  if($scope.app.mdl['Wall_Helper'].events['DataChange.Baliza_Roja_1']['eventData'][0]['newValue'][0].value==true){
    $scope.view.wdg["modelItem-23"]["color"]="rgb(254,10,10)";
  }
  else{
    $scope.view.wdg["modelItem-23"]["color"]="rgb(150,150,150)";
  }
}
             )
$scope.$watch("app.mdl['Wall_Helper'].events['DataChange.Baliza_Verde_1']['eventData'][0]['newValue'][0].value", function(){
  if($scope.app.mdl['Wall_Helper'].events['DataChange.Baliza_Roja_1']['eventData'][0]['newValue'][0].value==true){
    $scope.view.wdg["modelItem-13"]["color"]="rgb(10,254,10)";
  }
  else{
    $scope.view.wdg["modelItem-13"]["color"]="rgb(150,150,150)";
  }
}
             )
$scope.$watch("app.mdl['Wall_Helper'].events['DataChange.Baliza_Verde_2']['eventData'][0]['newValue'][0].value", function(){
  if($scope.app.mdl['Wall_Helper'].events['DataChange.Baliza_Roja_1']['eventData'][0]['newValue'][0].value==true){
    $scope.view.wdg["modelItem-24"]["color"]="rgb(10,254,10)";
  }
  else{
    $scope.view.wdg["modelItem-24"]["color"]="rgb(150,150,150)";
  }
}
             )
$scope.intervalPromise1 = $interval(function() {
  $scope.view.wdg["modelItem-16"]["rz"]-=4;
  $scope.view.wdg["modelItem-20"]["rz"]-=4;
  $scope.view.wdg["modelItem-21"]["rz"]-=4;
  $scope.view.wdg["modelItem-22"]["rz"]-=4;
}
                                    , 100);
