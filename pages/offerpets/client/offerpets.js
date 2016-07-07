Template.offerpets.helpers({
  pets:function(){return Pets.find();}
})


Template.offerpets.events({
  "click .js-submit":function(event){
    event.preventDefault();
    const name = $(".js-name").val();
    const email = $(".js-email").val();
    const pet = $(".js-pet").val();
    const breed = $(".js-breed").val();
    const sex = $(".js-sex").val();
    const age = $(".js-age").val();
    const pet_obj = {
      objname:name, objemail:email, objpet:pet, objbreed:breed, objsex:sex, objage:age,
    }
    Meteor.call("insertpet", pet_obj);
    Router.go('availablepets');
  }
})
