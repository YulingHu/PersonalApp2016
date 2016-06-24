Router.configure({layoutTemplate: 'layout',});

Router.route('/',{name: "home"});
Router.route("dogs");
Router.route("cats");
Router.route("availablepets");
Router.route("offerpets");
Router.route("contactus");
Router.route("practice");
Router.route("draw");

Router.route('/showbreed/:_id',
       {name:"showbreed",
        data: function(){
					const c = DogSearch.findOne({_id:this.params._id});
					// console.dir(c);
					return c
				}
  		 }
);
