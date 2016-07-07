Template.contactus.helpers({
  commentsdata: function()
    {return Comments.find({},{sort:{createdAt:-1},limit:10});}
})

Template.contactus.events({
  "click .js-submit": function(event){
    event.preventDefault();
    // console.dir(event);

    const comment_name = $(".js-name").val();
    const comment_rating = $(".js-rating").val();
    const comment_text = $(".js-suggestions").val();
    if(comment_text==""){
      window.alert("you must enter a comment!");
      return;
    }

    const comment_obj =
    {text: comment_text,rating: comment_rating, name:comment_name,
      createdAt: new Date(),createdBy: Meteor.userId(),
      userEmail: Meteor.user().emails[0].address};
    Meteor.call("commentsinsert",comment_obj);
     $(".js-user-comment").val("");

  }
})

Template.commentRow.events({
  "click .js-delete": function(event){
    Meteor.call("commentsremove",this.comment._id);
  }
})
