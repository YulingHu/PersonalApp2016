Router.configure({layoutTemplate: 'layout',});

Router.route('/',{name: "home"});
Router.route("dogs");
Router.route("cats");
Router.route("availablepets");
Router.route("offerpets");
Router.route("contactus");
Router.route("quiz4");

Router.route('/quiz4/:_id',
       {name:"quiz4bio",
        data: function(){
					return Bios.findOne({_id:this.params._id});
				  }
  		 }
);
