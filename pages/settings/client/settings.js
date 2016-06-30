Template.settings.helpers({
	settings:function(){return Settings.findOne({user:Meteor.userId()});}
})

Template.settings.events({
	"click .js-submit": function(event){
		event.preventDefault();
		const g = $(" .js-greeting").val();
    const setting = {yourgreeting:g};
    Meteor.call("submitsettings", setting);
	}
})
