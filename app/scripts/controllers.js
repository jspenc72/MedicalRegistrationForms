angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('RegistrationCtrl', function($scope) {

})

.controller('InsuranceCtrl', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/forms/insurance-verification.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.insuranceVerificationModal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/forms/insurance-preauthorization-request.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.insurancePreauthorizationRequestModal = modal;
  });

})

.controller('InsurancePreauthorizationCtrl', function($scope) {

})

.controller('InsuranceVerificationCtrl', function($scope) {

})

