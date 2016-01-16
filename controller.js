(function(){
var app = angular.module("SushiApp",[])



app.controller('StoreControl', function(){

	var results = [{name: "Sushi Loca", rating: 4},{name: "Sushi 2", rating: 1},{name: "Sushi 3", rating: 5}, {name: "Sushi 4", rating: 4}
	,{name: "Sushi 5", rating: 4}, {name: "Sushi 69", rating: 3},{name: "Sushi 7", rating: 4},{name: "Sushi Yum Yum", rating: 4},
	{name: "Sushi 9", rating: 4},{name: "Sushi 10", rating: 4},{name: "Gluten Sushi", rating: 0},{name: "Sushi 12", rating: 2},
	{name: "Sushi 13", rating: 4},{name: "Sushi 42", rating: 5}];


	this.restaurants = results;
	this.pageNumber = 0;

	this.getRestaurants = function(page){
		console.log("Butts");
		var start = page * 10;
		var end = start + 10;

		var restList = this.restaurants.slice(start, end);
		console.log(restList);
		return restList;
	};

	this.subtractPage = function(){
		this.pageNumber -= 1;
	};
	this.addPage = function(){
		this.pageNumber += 1;
	};
	this.noMorePages = function(page){

		var index = (page + 1) * 10;

		return !this.restaurants[index];
	};	

});

app.controller('TabController', function(){
	this.tab = 1;

	this.setTab = function(val){
		if(val){this.tab = val;}
		else{this.tab = 1;}
	};
	this.isTab = function(val){
		if(this.tab === val){return true;}
		else{return false;}
	};
});




})();