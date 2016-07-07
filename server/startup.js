Meteor.startup(function(){
// Dogs.remove({});
// Cats.remove({});
// Pets.remove({});
// Comments.remove({});

if (Dogs.find().count()==0) {
	Dogs.insert({rank:1, name:"Labrador Retriever", breed:"Sporting", weight:34, height:90, img:"images/d1.jpg"});
  Dogs.insert({rank:2, name:"German Shepherd", breed:"Herding", weight:37, height:65, img:"images/d2.jpg"});
	Dogs.insert({rank:3, name:"Golden Retriever", breed:"Sporting", weight:36, height:61, img:"images/d3.jpg"});
	Dogs.insert({rank:4, name:"French Bull", breed:"Toy", weight:7, height:31, img:"images/d4.jpg"});
	Dogs.insert({rank:5, name:"Beagle", breed:"Toy", weight:7, height:31, img:"images/d5.jpg"});
	Dogs.insert({rank:6, name:"British Bull", breed:"Toy", weight:7, height:31, img:"images/d6.jpg"});
	Dogs.insert({rank:7, name:"Yorkshire Terrier", breed:"Toy", weight:7, height:31, img:"images/d7.jpg"});
	Dogs.insert({rank:8, name:"Poodle", breed:"Toy", weight:7, height:31, img:"images/d8.jpg"});
	Dogs.insert({rank:9, name:"Rottweiler", breed:"Working", weight:59, height:69, img:"images/d9.jpg"});
	Dogs.insert({rank:10, name:"Boxer", breed:"Working", weight:32, height:63, img:"images/d10.jpg"});
	Dogs.insert({rank:11, name:"Pointer", breed:"Sporting", weight:32, height:66, img:"images/d11.jpg"});
	Dogs.insert({rank:12, name:"Siberian Husky", breed:"Working", weight:32, height:63, img:"images/d12.jpg"});
	Dogs.insert({rank:13, name:"Dachshund", breed:"Hound", weight:7, height:31, img:"images/d13.jpg"});
	Dogs.insert({rank:14, name:"Doberman", breed:"Working", weight:27, height:28, img:"images/d14.jpg"});
	Dogs.insert({rank:15, name:"Great Dane", breed:"Working", weight:54, height:76, img:"images/d15.jpg"});
};

if (Cats.find().count()==0) {
	Cats.insert({rank:1, name:"Persian", img:"images/c1.jpg", infomation:"This breed has been number one since the CFA first started keeping records in 1871. Persians are affectionate and loyal but need their long fur groomed every day."});
	Cats.insert({rank:2, name:"Maine Coon", img:"images/c2.jpg", infomation:"This breed has been in second place since 1992 and it's no wonder. This is a very gentle, loving creature who is large by cat-size. They weigh between 15 and 25 lbs. and have long fur like the Persian. However, they do not need as much grooming as the Persian."});
  Cats.insert({rank:3, name:"Exotic", img:"images/c3.jpg", infomation:"This breed is like a Persian but with short fur. Their nickname is Persian in Pajamas because of their coloring. They are sweet like a Persian but only need brushing twice a week."});
	Cats.insert({rank:4, name:"Siamese", img:"images/c4.jpg", infomation:"The yowl of a Siamese is very familiar to fanciers of this breed. And it's not just for attention - Siamese like to chat with their owners. This is a sleek cat who is very athletic. They usually gravitate to one person and are loyal and loving."});
	Cats.insert({rank:5, name:"Abyssinian", img:"images/c5.jpg", infomation:"These cats are considered some of the lookers in the cat world. Thin and elegant with a shiny coat, they are active felines, very playful and friendly."});
	Cats.insert({rank:6, name:"Ragdoll", img:"images/c6.jpg", infomation:"This breed gets its name from the way these cats go completely limp in your arms when you pick them up. They are cute and cuddly and large like the Maine Coon, weighing between 10 and 20 lbs. (males tend to be larger). This is a breed that should always be kept inside as they are very docile and would likely not defend themselves outside."});
	Cats.insert({rank:7, name:"Birman", img:"images/c7.jpg", infomation:"If you want a cat that is dog-like, the Birman is a good choice. He is friendly, outgoing, even-tempered and flexible, a very rare trait to find in a cat. They are known to come when called and to greet you at the door like a pooch would. They have long silky hair that does not require much grooming."});
	Cats.insert({rank:8, name:"American Shorthair", img:"images/c8.jpg", infomation:"This breed originally arrived in America on the Mayflower. They were bred for hunting and thus are excellent hunters, have good health and are a quiet cats. They make great family pets and are especially good with children."});
	Cats.insert({rank:9, name:"Oriental", img:"images/c9.jpg", infomation:"This breed looks and behaves like a Siamese but comes in two fur lengths and over 300 color combinations. Their personality is similar to the Siamese but they are quieter."});
	Cats.insert({rank:10, name:"Sphynx", img:"images/c10.jpg", infomation:"Known as the Naked Climber this breed climbs anything and is lively and athletic. They have an unusual appearance, sans fur, and come in a multitude of different skin colors. They are loyal and loving and demand constant attention."});
};

if (Pets.find().count()==0) {
	Pets.insert({objpet:"Puppy", objbreed:"Golden Retriever", objsex:"Girl", objage:"2 months", objname:"Yuling", objemail:"huyuling@brandeis.edu"});
	Pets.insert({objpet:"Kitten", objbreed:"Birman", objsex:"Girl", objage:"4 months", objname:"Jane", objemail:"jane@google.com"});
	Pets.insert({objpet:"Cat", objbreed:"Oriental", objsex:"Boy", objage:"2 years", objname:"Kevin", objemail:"kevin@google.com"});
	Pets.insert({objpet:"Dog", objbreed:"Labrador Retriever", objsex:"Girl", objage:"3 years", objname:"Rachel", objemail:"rachel@google.com"});
	Pets.insert({objpet:"Puppy", objbreed:"French Bull", objsex:"Boy", objage:"1 months", objname:"Marry", objemail:"marry@google.com"});
};


})
