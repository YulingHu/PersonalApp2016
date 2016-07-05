
Meteor.publish("theSettings", function(){
  if(this.userId){return Settings.find();}
  else{this.ready();}
});


Meteor.publish("thePets", function(){
  if(this.userId){return Pets.find();}
  else{this.ready();}
});
