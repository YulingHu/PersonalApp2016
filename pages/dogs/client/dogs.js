Template.dogs.helpers({
	dogsearch: function(){return DogSearch.find({}, {sort:{dog_popularity:-1}});}
})

Template.dogs.events({
	"click .js-search": function(event){
		event.preventDefault();
		const breed=$(".js-breed").val().toLowerCase();

		if(DogSearch.find({dog_breed:breed}).count()==0){
			const search_obj={dog_breed:breed,dog_popularity:1}
			DogSearch.insert(search_obj);
		}
		else{
			DogSearch.update({_id:DogSearch.findOne({dog_breed: breed})._id},{$inc:{dog_popularity: 1}});
		}

	}
})
