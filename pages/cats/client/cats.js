Template.cats.helpers({
	catsearch: function(){return CatSearch.find({}, {sort:{cat_popularity:-1}});}
})

Template.cats.events({
	"click .js-search": function(event){
		event.preventDefault();
		const breed=$(".js-breed").val().toLowerCase();

		if(CatSearch.find({cat_breed:breed}).count()==0){
			const search_obj={cat_breed:breed,cat_popularity:1}
			CatSearch.insert(search_obj);
		}
		else{
			CatSearch.update({_id:CatSearch.findOne({cat_breed: breed})._id},{$inc:{cat_popularity: 1}});
		}

	}
})
