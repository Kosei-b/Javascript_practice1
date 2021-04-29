/* Variable*/


let dog = "dog"

document.getElementById("animal1").innerHTML = dog;

let cat = "cat"

document.getElementById("animal2").innerHTML = cat;

let pig = "pig"

document.getElementById("animal3").innerHTML = pig;

let cow = "cow"

document.getElementById("animal4").innerHTML = cow;

let fish = "fish"
document.getElementById("animal5").innerHTML = fish;

/* operator*/

document.getElementById("equation").innerHTML = 49 + 20 - 19;


var x,y,z;
x = 30;
y = 20;
z = 10;

document.getElementById("equation2").innerHTML = x + y * z;


/* function*/

var z = myFunction (40, 20);
document.getElementById("equation3").innerHTML = z;
function myFunction (a, b,) {
	return a + b -10;
}

/* condtion*/

function myFunction2() {

    var hour = new Date().getHours();
    var greeting;
    if (hour < 18) {
        greeting = "Hello,こんにちは";
    }else {
        greeting = "こんばんは";
    }
    document.getElementById("greeting").innerHTML = greeting;    

}

































