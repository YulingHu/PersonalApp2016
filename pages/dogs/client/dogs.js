Template.dogs.helpers({
	dogsearch: function(){
		return DogSearch.find({}, {sort:{dog_popularity:-1}});
	},

	theColor: function(){
    const instance = Template.instance();
    return instance.state.get("color");
  },

  theCounter: function(){
    const instance = Template.instance();
    return instance.state.get("counter");
  },
})

Template.dogs.events({
	"click .js-search": function(event){
		event.preventDefault();
		const breed=$(".js-breed").val().toLowerCase();

		if(DogSearch.find({dog_breed:breed}).count()==0){
			const dogsearch_obj={dog_breed:breed,dog_popularity:1}
			Meteor.call("dogsearchlib",dogsearch_obj);
		}
		else{
			Meteor.call("dogupdate",breed);
		}
	},

	"change .js-color": function(event,instance){
    const c = instance.$(".js-color").val();
    instance.state.set("color",c);
  },

  "click .js-pushme": function(event,instance){
    const counter = instance.state.get("counter");
    instance.state.set("counter",1+counter);
  },
})

Template.dogs.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    color:"bg-info",
    counter:0,
  });
});
