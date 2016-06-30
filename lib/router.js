Router.configure({layoutTemplate: 'layout',});

Router.route('/',{name: "home"});
Router.route("dogs");
Router.route("cats");
Router.route("availablepets");
Router.route("offerpets");
Router.route("contactus");
Router.route("settings");
Router.route("quiz2");
Router.route("myprofile");
Router.route("profiles");

Router.route('/dogbreed/:_id',
       {name:"dogbreed",
        data: function(){
					const d = DogSearch.findOne({_id:this.params._id});
					return d}
  		 }
);

Router.route('/catbreed/:_id',
       {name:"catbreed",
        data: function(){
					const c = CatSearch.findOne({_id:this.params._id});
					return c}
  		 }
);
