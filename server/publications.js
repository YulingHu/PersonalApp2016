// Meteor.publish("theCatSearch", function(){return CatSearch.find();});
// Meteor.publish("theDogSearch", function(){return DogSearch.find();});
Meteor.publish("theSettings", function(){
  if(this.userId){return Settings.find();}
  else{this.ready();}
});

Meteor.publish("theMyprofile", function(){
  if(this.userId){return Myprofile.find();}
  else{this.ready();}
});
