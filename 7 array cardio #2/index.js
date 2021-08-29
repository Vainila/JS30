// ## Array Cardio Day 2

const people = [
   { name: "Wes", year: 1988 },
   { name: "Kait", year: 1986 },
   { name: "Irv", year: 1970 },
   { name: "Lux", year: 2015 },
];

const comments = [
   { text: "Love this!", id: 523423 },
   { text: "Super good", id: 823423 },
   { text: "You are the best", id: 2039842 },
   { text: "Ramen is my fav food ever", id: 123523 },
   { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
let curYear = (new Date()).getFullYear();

let isAdult = people.some(person=>{
   if((curYear - person.year)>=18){
      return true;
   }
   return false;
   
})
console.log("is at least one person 19 or older? "+ isAdult);
// Array.prototype.every() // is everyone 19 or older?

let isEveryoneAdult = people.every(person=>(curYear - person.year)>=19);

console.log("is everyone 19 or older?" + isEveryoneAdult);


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

let superComment = comments.find(comment => comment.id == 823423);

console.log(superComment);





// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

let neededIndex = comments.findIndex(comment => comment.id == 823423);
console.log(neededIndex); 


 let newComments = [...comments];
 newComments.splice(neededIndex,1);

 
 console.table(comments);
 console.table(newComments);






// BTW: to run this file you can go into current folder via terminal & use command: node index