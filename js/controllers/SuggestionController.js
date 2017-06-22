app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions){
	
	$scope.post = suggestions.posts[$routeParams.id];
	
	$scope.comment = $scope.posts.comments;

	$scope.addComment = function() {
		// if input empty, don't submit.
		if (!$scope.comment || $scope.comment === "") {
			return;
		}

		// push comment into the suggestions.js service.
		$scope.comment.push({
			body: $scope.comment,
			upvotes: 0,
			
		});

		// after submit, clear input
		$scope.comment = '';
	};

	$scope.upVoteComment = function(comment) {
		comment.upvotes += 1;
	};


}]);