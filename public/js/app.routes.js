(function () {

	'use strict';
	angular
		.module('app')
		.config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
		$routeProvider
			.when('/article', {
				templateUrl: '/js/components/article/article.view.html',
        controller: 'ArticleController',
        controllerAs: 'vm'
			})
			.otherwise({
        redirectTo: '/'
      });
	}
})();
