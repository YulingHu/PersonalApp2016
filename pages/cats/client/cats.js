Template.cats.helpers({
	catsearch: function(){return CatSearch.find({}, {sort:{cat_popularity:-1}});},
})

Template.cats.events({
	"click .js-search": function(event){
		const breed=$(".js-breed").val().toLowerCase();
		Meteor.call("catsearch", breed);
	}
})
