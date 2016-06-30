Template.myprofile.helpers({
  myprofile:function(){return Myprofile.findOne({user:Meteor.userId()});}
})

Template.myprofile.events({
  "click .js-addprofile":function(event){
    event.preventDefault();
    const firstname = $(".js-firstname").val();
    const lastname = $(".js-lastname").val();
    const nickname = $(".js-nickname").val();
    const email = $(".js-email").val();
    const birthyear = $(".js-birthyear").val();
    const profile_obj = {
      objfirstname: firstname, objlastname: lastname, objnickname: nickname, objemail: email, objbirthyear: birthyear,
    }
    Meteor.call("insertprofile", profile_obj);
    Router.go('profiles');
  }
})
