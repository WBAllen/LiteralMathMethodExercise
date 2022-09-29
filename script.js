// 1a
let warmHugs = "Hi \, I\'m Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
warmHugs = warmHugs.replace("like","love");
console.log(warmHugs);

// OR
console.log(warmHugs.replace("like","love"));

// 2a
let beenImpailed = "Oh, look at that. I've been impaled.";

// 2b
console.log(beenImpailed.slice(18,36));

// OR
// console.log(beenImpailed.slice(18));

// OR
// console.log(beenImpailed.slice(-18));

// 3a
let dotDotDot = "...";

// 3b

let skullBones = "I don't have a skull${dotDotDot}or bones";
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
// let randomNumber = Math.random(); //0 - 0.99999999
// randomNumber *=3; //0 - 2.99999999
// randomNumber = Math.floor(randomNumber); //gets rid of decimal
// randomNumber++;
// console.log(randomNumber);

// OR
let randomNumber = Math.floor(Math.random()*3+1);
console.log(randomNumber); //THIS IS BEST PRACTICE

// OR
// let randomNumber = Math.ceil(Math.random()*3);
// console.log(randomNumber);

// BONUS
// 6
console.log(" Let it go!".repeat(2).toUpperCase());

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
// console.log(reindeers.replace("Reindeers_are_better_than_people."));

// OR
console.log(reindeers.replace(/ /gi, "_"));

// 8
console.log(Math.sqrt(2));

// 9
let newRandomNumber = Math.floor((Math.random()*(23-7+1)+7));
console.log(newRandomNumber);
