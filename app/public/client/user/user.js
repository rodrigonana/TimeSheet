angular.module('admin.user', ['admin.user.controller'])

.factory('User', ['$resource',
	function($resource){
		return $resource('rest/user/:id/:action', null, {
			'query': {isArray: false},
			'update': { method: 'PUT' },
			'signin': { method: 'POST', params: {action:'signin'} },
			'signout': { method: 'GET', params: {action:'signout'} },
			'auth': { method: 'GET', params: {action:'auth'} },
			'forgotPassword': { method: 'POST', params: {action:'forgot-password'} },
			'newPassword': { method: 'POST', params: {action:'new-password'} },
			'changePassword': { method: 'POST', params: {action:'change-password'} },
			'resetPassword': { method: 'POST', params: {action:'reset-password'} }
		});
	}
]);