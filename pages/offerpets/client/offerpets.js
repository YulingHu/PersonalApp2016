Template.offerpets.helpers({
  pets:function(){
    return Offerpets.find();
  }
})

Template.offerpets.events({
  "click .js-addPet":function(event){
    console.log("hey you clicked the button");
    const name = $(".js-name").val();
    const breed = $(".js-breed").val();
    const age = $(".js-age").val();
    const boy = $(".js-boy").val();
    const girl = $(".js-girl").val();
    const dog = $(".js-dog").val();
    const puppy = $(".js-puppy").val();
    const cat = $(".js-cat").val();
    const kitten = $(".js-kitten").val();
    const pets =
      { offeredBy:name, breed:breed, age:age,
        sex:[boy,girl], petname:[dog,puppy,cat,kitten]};
    console.dir(pets);
    Offerpets.insert(pets);
  }
})
