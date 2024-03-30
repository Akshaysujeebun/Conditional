let newDog  = "Chihuahua"

let x = newDog.length;
let y = newDog.toUpperCase();
let z = newDog.toLowerCase();

console.log (x);

console.log (y);

console.log (z);


if (newDog === "Chihuahua") { 
    console.log("I love Chihuahuas, it\’s my favorite dog breed");
} else { 
    console.log("I dont care, I prefer cats");
}

//Exercise 3

let d = prompt("Please enter a number:");

if (d % 2 === 0) {
    console.log("x is an even number");
} else {
    console.log("x is an odd number");
}


//Exercise 4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

console.log (users.length);

if (users.length == 0)
{ console.log("No one is online");
} else if
    (users.length == 1)
{ console.log("<name_user> is online");
} else if 
    (users.length == 2)
{ console.log("<name_user1> and <name_user2> are online");
}
   else 
{ console.log ("name_user1, name_user2 and 3 more are online");
