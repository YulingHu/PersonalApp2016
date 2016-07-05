Meteor.methods({

  commentsinsert: function(comment_obj){
    Comments.insert(comment_obj);
  },
  commentsremove: function(commentid){
    Comments.remove(commentid);
  },


  // dogsearch: function(breed){
  //   if(DogSearch.find({dog_breed:breed}).count()==0){
  //     const dogsearch_obj={dog_breed:breed,dog_popularity:1}
  //     DogSearch.insert(dogsearch_obj);
  //   }
  //   else{
  //     DogSearch.update({_id:DogSearch.findOne({dog_breed: breed})._id},{$inc:{dog_popularity: 1}});
  //   }
  // },

  // catsearch: function(breed){
  //   if(CatSearch.find({cat_breed:breed}).count()==0){
  //     const catsearch_obj={cat_breed:breed,cat_popularity:1}
  //     CatSearch.insert(catsearch_obj);
  //   }
  //   else{
  //     CatSearch.update({_id:CatSearch.findOne({cat_breed: breed})._id},{$inc:{cat_popularity: 1}});
  //   }
  // },

  submitsettings: function(setting){
    Settings.remove({user: this.userId});
    Settings.user = this.userId;
    Settings.insert(setting);
    console.dir(setting);
	},

  insertpet: function(pet){
    Pets.remove({user: this.userId});
    Pets.user = this.userId;
		Pets.insert(pet);
    console.dir(pet);
	},

})
