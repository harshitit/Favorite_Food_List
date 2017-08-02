// store ng-app name in a variable called foodieApp
var foodieApp = angular.module('foodieApp',['ngRoute']);
// give control to different pages using urls or route locations
foodieApp.config(function ($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'pages/login.html',
			controller: 'loginController'
		})
		.when('/home',{
			templateUrl: 'pages/main.html',
			controller: 'mainController'
		})
		.when('/restaurant/:id', {
			templateUrl: 'pages/restaurant.html',
			controller: 'restaurantController'
		})
})
// this is a controller of login page
foodieApp.controller('loginController',function($scope,$location){
	$scope.goToHome = function() {
		$location.url('home')
	}
});
// this is a controller of restaurant page
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.ingredients = [];
	$scope.getIngredients = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key e01b5da7ac054f9a9e21f4f9d55632b4',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response) {
				var ingredients = response.data.outputs[0].data.concepts;
				for (var i =0;i < ingredients.length;i++) {
				$scope.ingredients.push(ingredients[i].name);
				}
			}, function (xhr) {
	        	console.log(xhr);
	        })
		}
	$scope.restaurantId = $routeParams.id;
		var restaurants = [
			{
				name: 'Burger King',
				address: 'E-8, Inner Circle, Connaught Place, New Delhi',
				location: 'Connaught Place',
				category: 'Quick Bites',
				vote: '3.8',
				cuisines: 'Burger, Fast Food',
				cost: '500',
				hours: '10 AM to 11 PM (Mon-Sun)',
				phone: '011-33106219',
				image: 'https://b.zmtcdn.com/data/res_imagery/310078_CHAIN_7d80c38935b0a6386685a9ecef8d257c.jpg?output-format=webp',
				bestDish: {
					name: 'THE HAMBURGER',
					image: 'http://s.eatthis-cdn.com/media/images/ext/690257152/burger-king-ranked-hamburger.jpg'
				}
			},
			{
				name: 'Yeti - The Himalayan Kitchen',
				address: '30, 1st Floor, Hauz Khas Village, New Delhi',
				location: 'Hauz Khas Village',
				category: 'Casual Dining',
				vote: '4.9',
				cuisines: 'Tibetan, Nepalese',
				cost: '1300',
				hours: '12 Noon to 11:30 PM (Mon-Sun)',
				phone:'011-33106044',
				image: 'https://b.zmtcdn.com/data/res_imagery/18466957_RESTAURANT_8ede6ee959521ff9b2c6946b21613f80.jpg?output-format=webp',
				bestDish: {
					name: 'Tingmo',
					image: 'https://s-media-cache-ak0.pinimg.com/originals/99/74/13/9974139d6f0d14c3a298b4631862fd36.jpg'
				}
			},
			{
				name: 'Prime Street Cake',
				address: '12 & 13, F Block, Inner Circle, Connaught Place, New Delhi',
				location: 'Connaught Place',
				category: 'Casual Dining',
				vote: '3.6',
				cuisines: 'North Indian, Continental, Mexican, Italian, Chinese',
				cost: '1000',
				hours: '12 Noon to 1 AM (Mon-Sun)',
				phone:'011-43596623',
				image: 'https://b.zmtcdn.com/data/res_imagery/309705_RESTAURANT_906426943ab0afe7711dc5939a21c234.jpg?output-format=webp'
			},
			{
				name: 'Peninsular Kitchen',
				address: 'Level 3, Ambience Mall, Vasant Kunj, New Delhi',
				location: 'Vasant Kunj',
				category: 'Casual Dining',
				vote: '4.1',
				cuisines: 'Seafood, South Indian, Andhra, Hyderabadi, Goan',
				cost: '1500',
				hours: '11 AM to 12 Midnight (Mon-Sun)',
				phone:'011-33105823',
				image: 'https://b.zmtcdn.com/data/res_imagery/312300_RESTAURANT_70cd4d8448a38b2d38017a1736a60996.jpg?output-format=webp',
				bestDish: {
					name: 'Mutton shorba',
					image: 'https://www.boldsky.com/img/2012/08/16-mutton-shorba-160812.jpg'
				}
			},
			{
				name: 'Chor Bizarre',
				address: 'Bikaner House, Near India Gate, Pandara Road Market, New Delhi',
				location: 'Pandara Road Market',
				category: 'Casual Dining',
				vote: '4.5',
				cuisines: 'North Indian',
				cost: '1600',
				hours: '12 Noon to 3:30 PM, 7 PM to 11:30 PM (Mon-Sun)',
				phone:'011-33105872',
				image: 'https://b.zmtcdn.com/data/res_imagery/18421051_RESTAURANT_91a8e98f63efbb5d09001e19bf9c31e9.jpg?output-format=webp'
			}]
	$scope.restaurant = restaurants[$routeParams.id - 1];
});
// this is a controller of main page(home page)
foodieApp.controller('mainController',function($scope){
	$scope.restaurants=[
		{
			id:'1',
			name: 'Burger King',
			address: 'E-8, Inner Circle, Connaught Place, New Delhi',
			location: 'Connaught Place',
			category: 'Quick Bites',
			vote: '3.8',
			cuisines: 'Burger, Fast Food',
			cost: '500',
			hours: '10 AM to 11 PM (Mon-Sun)',
			phone: '011-33106219',
			image: 'https://b.zmtcdn.com/data/res_imagery/310078_CHAIN_7d80c38935b0a6386685a9ecef8d257c.jpg?output-format=webp',
			bestDish: {
				name: 'THE HAMBURGER',
				image: 'http://s.eatthis-cdn.com/media/images/ext/690257152/burger-king-ranked-hamburger.jpg'
			}
		},
		{
			id:'2',
			name: 'Yeti - The Himalayan Kitchen',
			address: '30, 1st Floor, Hauz Khas Village, New Delhi',
			location: 'Hauz Khas Village',
			category: 'Casual Dining',
			vote: '4.9',
			cuisines: 'Tibetan, Nepalese',
			cost: '1300',
			hours: '12 Noon to 11:30 PM (Mon-Sun)',
			phone:'011-33106044',
			image: 'https://b.zmtcdn.com/data/res_imagery/18466957_RESTAURANT_8ede6ee959521ff9b2c6946b21613f80.jpg?output-format=webp',
			bestDish: {
				name: 'Tingmo',
				image: 'https://s-media-cache-ak0.pinimg.com/originals/99/74/13/9974139d6f0d14c3a298b4631862fd36.jpg'
			}
		},
		{
			id:'3',
			name: 'Prime Street Cake',
			address: '12 & 13, F Block, Inner Circle, Connaught Place, New Delhi',
			location: 'Connaught Place',
			category: 'Casual Dining',
			vote: '3.6',
			cuisines: 'North Indian, Continental, Mexican, Italian, Chinese',
			cost: '1000',
			hours: '12 Noon to 1 AM (Mon-Sun)',
			phone:'011-43596623',
			image: 'https://b.zmtcdn.com/data/res_imagery/309705_RESTAURANT_906426943ab0afe7711dc5939a21c234.jpg?output-format=webp'
		},
		{
			id:'4',
			name: 'Peninsular Kitchen',
			address: 'Level 3, Ambience Mall, Vasant Kunj, New Delhi',
			location: 'Vasant Kunj',
			category: 'Casual Dining',
			vote: '4.1',
			cuisines: 'Seafood, South Indian, Andhra, Hyderabadi, Goan',
			cost: '1500',
			hours: '11 AM to 12 Midnight (Mon-Sun)',
			phone:'011-33105823',
			image: 'https://b.zmtcdn.com/data/res_imagery/312300_RESTAURANT_70cd4d8448a38b2d38017a1736a60996.jpg?output-format=webp',
			bestDish: {
				name: 'Mutton shorba',
				image: 'https://www.boldsky.com/img/2012/08/16-mutton-shorba-160812.jpg'
			}
		},
		{
			id:'5',
			name: 'Chor Bizarre',
			address: 'Bikaner House, Near India Gate, Pandara Road Market, New Delhi',
			location: 'Pandara Road Market',
			category: 'Casual Dining',
			vote: '4.5',
			cuisines: 'North Indian',
			cost: '1600',
			hours: '12 Noon to 3:30 PM, 7 PM to 11:30 PM (Mon-Sun)',
			phone:'011-33105872',
			image: 'https://b.zmtcdn.com/data/res_imagery/18421051_RESTAURANT_91a8e98f63efbb5d09001e19bf9c31e9.jpg?output-format=webp'
		}]
});
