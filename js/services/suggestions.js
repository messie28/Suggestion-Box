app.factory('suggestions', [function(){
	var demoSuggestions = {
		posts: [
		{
			title: 'Free pizza at club meetings',
			upvotes: 15,
			comments: [],
			id: 0
		},
		{
			title: 'End all club emails with Laffy Taffy jokes',
			upvotes: 9,
			comments: [],
			id: 1
		},
		{
			title: 'Retrofit water fountain with Gatorade',
			upvotes: 7,
			comments: [],
			id: 2
		},
		{
			title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
			upvotes: 3,
			comments: [],
			id: 3
		},
	]
	};
	return demoSuggestions;
}]);
