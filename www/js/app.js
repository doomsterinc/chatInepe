// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'ionic.service.analytics', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $ionicAnalytics) {
  $ionicPlatform.ready(function() {

    $ionicAnalytics.register();
    
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
}
if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();

      function HTMLinXHR() {
        if (!window.XMLHttpRequest)
          return false;
        var req = new window.XMLHttpRequest();
        req.open('GET', window.location.href, false);
        try {
          req.responseType = 'document';
        } catch(e) {
          return true;
        }
        return false;
      }

      var msg = HTMLinXHR() ? "Your browser supports HTML in XHR, yay! \\o/" : "Your browser does not support HTML in XHR, booo! :-(";

        alert(msg);

        function detectHtmlInXhr(callback) {
          if (!window.XMLHttpRequest) {
            window.setTimeout(function() { callback(false); }, 0);
            return;
          }
          var done = false;
          var xhr = new window.XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (this.readyState == 4 && !done) {
              done = true;
              callback(!!(this.responseXML && this.responseXML.title && this.responseXML.title == "&&<"));
            }
          }
          xhr.onabort = xhr.onerror = function() {
            if (!done) {
              done = true;
              callback(false);
            }
          }
          try {
            xhr.open("GET", "detect.html");
            xhr.responseType = "document";
            xhr.send();
          } catch (e) {
            window.setTimeout(function() {
              if (!done) {
                done = true;
                callback(false);
              } 
            }, 0);
          }
        }

        function getHTML (oXHR, sTargetId) {
          var rOpen = new RegExp ("<(?!\!)\\s*([^\\s>]+)[^>]*\\s+id\\=[\"\']" + sTargetId + "[\"\'][^>]*>" ,"i"),
              sSrc = oXHR.responseText, aExec = rOpen.exec(sSrc);
          return false;
        }

        var = oReq = new XMLHttpRequest();
        oReq.open("get", "tab-dash.html", true);
        
      }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })
  .state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
