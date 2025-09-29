// let antalKlossar = prompt('skriv in antil klossar: ');

let pinneA = [ 1, 2 ];
let pinneB = [  ];
let pinneC = [  ];

let isDone = false;

do { 
    flyttaKlossar
}
while (
    isDone == false
);

function flyttaklossar() {
    let kloss = pinneA.pop()
    pinneB.push(kloss)
    isDone = true
}

console.log(pinneA)
console.log(pinneB)
console.log(pinneC)