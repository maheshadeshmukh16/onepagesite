'use strict';

/**
 * @ngdoc overview
 * @description
 * Main module of the application.
 */
var myApp=angular.module('TESTApp', [
   // 'ngAnimate',
    //'ngCookies',
    //'ngResource',
    //'ngRoute',
    //'ngSanitize',
    //'ngTouch',
    'ui.router',
    'ui.bootstrap',

]);


myApp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {


    $urlRouterProvider.otherwise('/homepage');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('homepage', {
            url: '/homepage',
            views: {
                '': {
                    templateUrl: 'views/homepage_base.html'
                },
                'frontend_content@homepage': {
                    templateUrl: 'views/home.html'
                    //controller: 'MainCtrl'
                },
            }
        })

       /* .state('registration.signup', {
            url: '/signup',
            views: {
                'login_content@registration': {
                    templateUrl: 'views/signup.html'
                    //controller: 'MainCtrl'
                },
            }
        })


        .state('dashboard', {
            url: '/dashboard',
            views: {
                '': {
                    templateUrl: 'views/dashboard_base.html'
                },
                'dashboard_content@dashboard': {
                    templateUrl: 'views/dashboard.html',
                    controller: 'DashboardCtrl'
                }
            }
        })

        .state('dashboard.events', {
            url: '/events',
            views: {
                '': {
                    templateUrl: 'views/dashboard_base.html'
                },
                'dashboard_content@dashboard': {
                    templateUrl: 'views/events.html',
                    controller: 'EventsCtrl'
                }
            }
        })

        .state('dashboard.gallery', {
            url: '/gallery',
            views: {
                'dashboard_content@dashboard': {
                    templateUrl: 'views/gallery.html',
                    controller: 'GalleryCtrl'
                    //controller: 'EventsCtrl'
                }
            }
        })
        .state('dashboard.commitee', {
            url: '/commitee',
            views: {
                'dashboard_content@dashboard': {
                    templateUrl: 'views/commitee.html',
                    controller: 'CommitteeCtrl'
                }
            }
        })
        .state('dashboard.links', {
            url: '/links',
            views: {
                'dashboard_content@dashboard': {
                    templateUrl: 'views/links.html',
                    controller: 'LinksCtrl'
                }
            }
        })

        .state('dashboard.feedback', {
            url: '/feedback',
            views: {
                'dashboard_content@dashboard': {
                    templateUrl: 'views/feedback.html'
                    //controller: 'MainCtrl'
                }
            }
        })

        .state('dashboard.sponsors', {
            url: '/sponsors',
            views: {
                'dashboard_content@dashboard': {
                    templateUrl: 'views/sponsor.html',
                    controller: 'SponsorsCtrl'
                }
            }
        })


        .state('dashboard.publications', {
            url: '/publications',
            views: {
                'dashboard_content@dashboard': {
                    templateUrl: 'views/publications.html',
                    controller: 'PublicationsCtrl'
                }
            }
        })


*/

});

