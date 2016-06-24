Template.cats.helpers({
	catsearch: function(){return CatSearch.find({}, {sort:{cat_popularity:-1}});}
})

Template.cats.events({
	"click .js-search": function(event){
		event.preventDefault();
		const breed=$(".js-breed").val().toLowerCase();

		if(CatSearch.find({cat_breed:breed}).count()==0){
			const catsearch_obj={cat_breed:breed,cat_popularity:1}
			Meteor.call("catsearchlib",catsearch_obj);
		}
		else{
		Meteor.call("catupdate",breed);
		}

	}
})
