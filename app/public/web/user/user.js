angular.module('admin.user', ['admin.user.controller'])

.factory('User', ['$resource',
	function($resource){
		return $resource('api/users/:id/:action', null, {
			'query': {isArray: true},
			'update': { method: 'PUT' },
			'signin': { method: 'GET', params: {action:'signin'} },
			'signup': { method: 'POST', params: {action:'signup'} },
			'signout': { method: 'GET', params: {action:'signout'} },
			'auth': { method: 'GET', params: {action:'auth'} },
			'forgotPassword': { method: 'POST', params: {action:'forgot-password'} },
			'newPassword': { method: 'POST', params: {action:'new-password'} },
			'changePassword': { method: 'POST', params: {action:'change-password'} },
			'resetPassword': { method: 'POST', params: {action:'reset-password'} }
		});
	}
]);