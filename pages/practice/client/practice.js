Template.practice.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    color:"bg-info",
    counter:0,
  });
});

Template.practice.helpers({
  theColor: function(){
    const instance = Template.instance();
    return instance.state.get("color");
  },
  theCounter: function(){
    const instance = Template.instance();
    return instance.state.get("counter");
  },
});

Template.practice.events({
  "change .js-color": function(event,instance){
    const c = instance.$(".js-color").val();
    instance.state.set("color",c);
  },
  "click .js-pushme": function(event,instance){
    const counter = instance.state.get("counter");
    instance.state.set("counter",1+counter);
  },
});
