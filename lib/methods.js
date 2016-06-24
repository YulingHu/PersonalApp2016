Meteor.methods({

  commentsinsert: function(comment_obj){
    Comments.insert(comment_obj);
  },
  commentsremove: function(commentid){
    Comments.remove(commentid);
  },

  dogsearchlib: function(dogsearch_obj){
    DogSearch.insert(dogsearch_obj);
  },
  dogupdate: function(breed){
    DogSearch.update({_id:DogSearch.findOne({dog_breed: breed})._id},{$inc:{dog_popularity: 1}});
  },

  catsearchlib: function(catsearch_obj){
    CatSearch.insert(catsearch_obj);
  },
  catupdate: function(breed){
    CatSearch.update({_id:CatSearch.findOne({cat_breed: breed})._id},{$inc:{cat_popularity: 1}});
  },

})
