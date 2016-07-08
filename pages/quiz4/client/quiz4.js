Template.quiz4.helpers({
  bios:function(){return Bios.find();}
})


Template.quiz4.events({
  "click .js-update":function(event){
    event.preventDefault();
    const name = $(".js-name").val();
    const bio = $(".js-bio").val();
    const obj = {objname:name, objbio:bio,};
    Meteor.call("insertbio", obj);
  }
})

Template.quiz4bio.helpers({
  bios:function(){return Bios.find({});}
})
