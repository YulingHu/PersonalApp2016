Session.set("petinput","");
Session.set("breedinput","");
Session.set("sexinput","");

Template.availablepets.helpers({

  pets: function(){
    let petin = Session.get("petinput");
    let breedin = Session.get("breedinput");
    let sexin = Session.get("sexinput");
    return Pets.find({"objpet":petin,"objbreed":breedin, "objsex":sexin});
  },

  allpets: function(){
    return Pets.find({});
  },

})

Template.availablepets.events({

  "click .js-search":function(event){
    event.preventDefault();
    const pet = $(".js-pet").val();
    const breed = $(".js-breed").val();
    const sex = $(".js-sex").val();
    Session.set("petinput",pet);
    Session.set("breedinput",breed);
    Session.set("sexinput",sex);
  },

})
