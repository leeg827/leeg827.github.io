let Name='Gia';
console.log(Name);
let number ='7';
console.log(number);
number ='seven';
console.log(number);
let tired = "true";
console.log(tired);
let letters =['g','i','a'];
console.log(letters);
let drinks =[8,'coffee',false];
console.log(drinks);
console.log(Name+'Lee');
console.log(89+11);
console.log(letters[0])
console.log(letters[letters.length-1]);
let poppin =['s','u','p','e','r','c','a','l','i','f','r','a','g','i','l','i','s','t','i','c','e','x','p','i','a','l','i','d','o','c','i','o','u','s'];
console.log(poppin.length);
let Firstname = ['G','i','a'];
let Lastname = ['L','e','e'];
console.log(Firstname.length == Lastname.length);
var my_things = [2 + 5, 'samurai', true];
letters.forEach(function(item) {
  console.log(item);
});
let time= new Date() .getHours();
    if (time >= 19 && time <=21.40) {console.log('it is')}
    else {console.log('no')};
let restaurants = ['din tai fung','luc lac','spring hot pot'];
console.log(restaurants);
let missAlot = ['go to school','visit museums','hang out with friends'];
console.log(missAlot);
let nycPlace = ['the Met','l train vintage','flying tiger'];
console.log(nycPlace);
let movies = ['Fantastic Mr. Fox','Whisper of the Heart','Perfect Blue'];
console.log(movies);
let combination =[restaurants, missAlot, nycPlace, movies];
console.log(combination);
combination.forEach(function(array){
    console.log(array);
});

combination.forEach(function(array){
    console.log(array.forEach(function(item)
    {console.log(item)}))
});

console.log('I think I kind of came close on the last one but Im not sure so.');