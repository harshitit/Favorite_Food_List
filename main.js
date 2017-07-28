var foodieApp = angular.module('foodieApp',['ngRoute']);
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
foodieApp.controller('loginController',function($scope,$location){
	$scope.goToHome = function() {
		$location.url('home')
	}
});
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.ingredients = [];
	$scope.getIngredients = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key YOUR_API_KEY',
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
				image: '/images/rest1.jpg'
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
				image: '/images/rest2.jpg'
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
				image: '/images/rest3.jpg'
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
				image: '/images/rest4.jpg'
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
				image: '/images/rest5.jpg'
			}]
	$scope.restaurant = restaurants[$routeParams.id - 1];
});
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
			image: '/images/rest1.jpg',
			bestDish: {
				name: 'Corn Pizza',
				image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
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
			image: '/images/rest2.jpg'
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
			image: '/images/rest3.jpg'
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
			image: '/images/rest4.jpg'
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
			image: '/images/rest5.jpg'
		}]
});
