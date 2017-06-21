require('angular');
require('angular-route');
require('angular-animate');
require('angular-touch');
require('angular-ui-bootstrap');
require('angular-material');

var HomeController = require('./components/home/homeController');
var HomeService = require('./components/home/homeService');

var AboutController = require('./components/about/aboutController');

var routes = require('./app.routes.js');

var testDirective = require('./directives/test/testDirective');

angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngMaterial'])

.service('HomeService', HomeService)

.controller('homeController', ['$scope', '$http', 'homeService', HomeController])
.controller('aboutController', ['$scope', aboutController])

.directive('test', testDirective)

.config(routes);
