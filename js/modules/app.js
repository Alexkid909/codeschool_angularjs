(function() {
	var app = angular.module('store',['store-products']);

	// Controllers 

	app.controller('ReviewController',function() {
		this.review = {};
		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.controller('StoreController',['$http',function($http) {
		// this.products = cars;
		var store = this;
		store.products = [];

		$http.get('js/json/products.json')
		.then(function(success) {
			store.products = success.data;
		}, function(error) {
			store.error = error.data;
		});
	}]);

	var cars = [
		{
			name: 'Ford Focus',
			price: 1499,
			description: 'Lorem ipsum dolor sit amet, lorem suspendisse pede, ipsum nisl integer. Illum scelerisque dolor suscipit rhoncus ut sit, integer sit sed, fames mauris convallis. Viverra quam aliquam vel reprehenderit malesuada molestiae, maecenas elit rutrum quis ut malesuada. Donec vehicula sem, massa eget vitae. Dui ac aenean ornare mollis eget ac, vel etiam lectus placerat dui, et metus a vestibulum, ut integer tellus volutpat laoreet nunc dictumst. Eu aliquet, justo eleifend in eu, est fermentum faucibus fusce, nulla diam nunc quam. Lacus suspendisse quod ut. Ipsum imperdiet elit condimentum aliquam. Nullam duis elementum at semper non, pede pretium tristique est eget quis sollicitudin.',
			canPurchase: true,
			images: [
				"ford-focus1.jpg",
				"ford-focus2.jpg",
				"ford-focus3.jpg"
			],
			reviews: [
				{
					stars: 5,
					body: "A good solid motor",
					author: "dave@mailinator.com"
				},
				{
					stars: 3,
					body: "Just ok",
					author: "steve@mailinator.com"
				}				
			]
		},
		{
			name: "Tesla Model S E",
			price: 48950,
			description: "Purus massa arcu dui fusce faucibus, vitae imperdiet pede, magna suscipit. A dui tincidunt bibendum, felis massa quis leo dolor mauris faucibus, nullam consequatur. Aliquam vestibulum, magna posuere per, nisl nunc morbi at, ac magna quisque quis. Nibh sed dapibus nulla ultricies praesent eu, egestas praesent justo interdum. Elementum volutpat parturient vel justo sit sit, gravida pellentesque aptent elit condimentum luctus nec, quam quisque eu, bibendum suscipit sed volutpat consequat. Elit porttitor vitae eu, cras viverra ut fusce interdum ac, sed porttitor, turpis tellus aenean. Ligula dolor vel nibh, in erat.",
			canPurchase: true,
			images: [
				"tesla-s1.jpg",
				"tesla-s2.jpg",
				"tesla-s3.jpg"
			],
			reviews: [
				{
					stars: 5,
					body: "Freakin awesome",
					author: "suzy@mailinator.com"
				},
				{
					stars: 4,
					body: "Love it",
					author: "john@mailinator.com"
				}				
			]
		},
		{
			name: "Toyota Prius 1.8 T Spirit Hybrid",
			price: 11799,
			description: "Earum vestibulum nam neque id sollicitudin sit, fusce amet platea tempor turpis nam, erat laoreet risus sed. Quis fermentum eiusmod eget praesent, id nibh eget eget in suspendisse, porta tincidunt, et pellentesque per risus tellus ut amet, etiam luctus. Id amet mauris pellentesque in et amet, duis eget wisi venenatis a, at erat enim, odio et erat in, ipsum posuere iaculis. Vel eu pellentesque est gravida consectetuer, luctus lorem libero lorem vitae, placerat turpis odio imperdiet nulla. Sagittis dui suscipit, atque quam dui dictumst tempor, hendrerit scelerisque sit sapien eu dictum, iaculis fusce, potenti consequat sed orci at per mauris. Sed suspendisse odio eget enim vitae, nulla nam, porta erat mi condimentum imperdiet wisi. Nulla duis lobortis in.",
			canPurchase: true,
			images: [
				"toyota-prius1.jpg",
				"toyota-prius2.jpg",
				"toyota-prius3.jpg"
			],
			reviews: [
				{
					stars: 1,
					body: "Crap",
					author: "tony@mailinator.com"
				}			
			]
		}
	];
})();