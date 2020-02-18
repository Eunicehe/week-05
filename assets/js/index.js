// This is a print statment to the console
// console.log("Hello World!");

// This is an example of variables using 'var'
// var x = 3;
// var y = x + 2
// console.log(y)

// y = "Hello";

// // console.log(y);


// // This is an example of variables using 'let'
// // let x = 3;
// // let y = x + 2;

// // console.log(y);

// // y = "Hello"

// // console.log(y)


// // //
// // const today = "2020-02-18"
// // console.log(today);
// // today = "2020-02-18";


// // Types
// // number
// let apple = 3;
// console.log(apple);

// // string
// let name = "Ali";
// console.log(name);

// let last_name = `Karbassi`;
// console.log(last_name);

// let full_name = `${name} ${last_name}`;
// console.log(full_name);

//Boolean
// let isOver18 = true;
// console.log(isOver18);

// let isCamelOwner = false;
// console.log(isCamelOwner);


// //undefined
// let awsome;
// console.log(awsome);

// // null
// let winner = null;
// console.log(winner);



//Array
// let groceries = [
//     "apples",
//     "orange",
//     "celery",
//     "pineapple",
// ];
// console.log(groceries);

// console.log(groceries.length);

// console.log(groceries[0]);
// console.log(groceries[4]);

// groceries.push("eggs");
// console.log(groceries);
// groceries.push("potatos");
// groceries.push("milk","cheese");
// console.log(groceries);

// let justBought = groceries.pop();
// console.log(groceries);
// console.log(justBought);



// Objects
let person = {
    name: {
        first: "Yuqing",
        middle: "null",
        last: "He",
    },

    dateOfBirth: "03-23",
    hair: "black",
    hairStyle: "straight",
    favColor: [
        "black",
        "white",
        "yellow",
        "red",
    ],
};

console.log(person.favColor[2]);

person.dateOfDeath = "2009-98-89";
console.log(person.dateOfDeath);

person.dateOfDeath = null;
console.log(person.dateOfDeath);
