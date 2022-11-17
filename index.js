// Code your solutions in this file
// for(let age=30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

let names=['Guadalupe','Ollie','Aki'];
function writeCards(names){
    let messages=[];
    let message;
    for(let i=0; i<names.length; i++){
        message=`Thank you, ${names[i]}, for the wonderful surprise gift!`
        console.log(message);
        messages.push(message);
        debugger;
    }
    return messages;
}

writeCards(names);

//While loop assignment of Countdown

function countDown(number){
    let i = 0;
    let newNum=number;
    while(i<=number){
        console.log(newNum);
        i++;
        newNum-=1;
    }
}

countDown(5);

