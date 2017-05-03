(function() {

	var app = angular.module('store-products', []);

	app.directive('productGallery',function() {
		return {
			restrict: 'E',
			templateUrl: 'product-gallery.html',
			controller: function() {
				this.currentImgNum = 0;
				this.setCurrent = function(imageNum) {
					if (imageNum) {
						this.currentImgNum = imageNum;
					} else {
						this.currentImgNum = 0;
					}
				};
			},
			controllerAs: 'gallery'
		};
	});

	app.directive('productPanels',function() {
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function() {
				this.tab = 3;
				this.selectTab = function(setTab) {
					this.tab = setTab;
				};
				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panels'
		};
	});

	app.directive('productTitle',function() {
		return {
			restrict: 'E',
			templateUrl: 'product-title.html',
		};
	});
})();