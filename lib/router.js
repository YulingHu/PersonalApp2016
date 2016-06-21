Router.configure({layoutTemplate: 'layout',});

Router.route('/',{name: "home"});
Router.route("dogs");
Router.route("cats");
Router.route("availablepets");
Router.route("offerpets");
Router.route("contactus");
Router.route("practice");

// Router.route('/showbreed/:_id',
//        {name:"showBreed",
//         data: function(){
// 					const c = Breed.findOne({_id:this.params._id});
// 					console.dir(c);
// 					return c
// 				}
//   		 }
// );
