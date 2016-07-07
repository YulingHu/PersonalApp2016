Meteor.publish("theComments", function(){
  return Comments.find();
});

// Meteor.publish("theSettings", function(){
//   if(this.userId){return Settings.find();}
//   else{this.ready();}
// });

Meteor.publish("thePets", function(){
  return Pets.find();
});

Meteor.publish("theDogs", function(){
  return Dogs.find();
});

Meteor.publish("theCats", function(){
  return Cats.find();
});
