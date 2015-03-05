
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.registration', {
    url: "/registration",
    views: {
      'menuContent': {
        templateUrl: "templates/registration.html",
        controller: 'RegistrationCtrl'
      }
    }
  })

  .state('app.insurance', {
    url: "/insurance",
    views: {
      'menuContent': {
        templateUrl: "templates/insurance.html",
        controller: 'InsuranceCtrl'
      }
    }
  })
  .state('app.insuranceverification', {
    url: "/insuranceverification",
    views: {
      'menuContent': {
        templateUrl: "templates/forms/insurance-verification.html",
        controller: 'InsuranceVerificationCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/registration');
});
