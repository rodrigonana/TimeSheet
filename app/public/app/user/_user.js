angular.module('admin.user', ['admin.user.controller'])

.factory('User', ['$resource',
	function($resource){
		return $resource(':id/:action', null, {
			'signin': { method: 'POST', params: {action:'signin'} }
		});
	}
]);