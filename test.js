
if (num < 49) {
    console.log ("Неверно!")
} else if (num > 100) {
    console.log ("Много!")
} else {
    console.log ("Верно!")
};

(num == 50) ? console.log ('Верно!') : console.log ('Неверно!');

switch (num) {
    case num < 49:
        console.log ("Неверно!");
        break;
    case num > 100:
        console.log ("Много!");
        break;
    case num > 80:
        console.log ("Все еще много!");
        break;
    case 50:
        console.log ("Верно!");
        break;
    default: 
        console.log ("Что-то пошло не так!");
        break;
}

// let num = 50;
// while (num < 55) {
//     console.log (num);
//     num++;
// }

do {
    console.log(num);
    num++
}
while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        continue
    }
    console.log (i)
}

let num = 1;
while (num < 50) {
    console.log (num);
    num++;
    if (num == 50){
        break
    }
}

function showFirstMessage (text) {
    alert (text);
}

showFirstMessage ("Hello World");

function calc(a,b) {
    return (a + b);
}
console.log (calc (3,4));
console.log (calc (20,35));

function retVar () {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log (anotherNum);


let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));
