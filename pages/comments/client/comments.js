Template.comments.helpers({

})

Template.comments.events({
  "click .js-submit-comment": function(event){
    event.preventDefault();
    console.dir(event);
    const comment_text = $(".js-user-commer").val();
    const comment_obj =
    {text: comment_text,
      createdAt: new Date(),createdBy: Meteor.userID(),
      userEmail: Meteor.user().emails[0].address
    };
    console.dir(comment_obj);
    $(".js-user-comment").val("");
  }
})
