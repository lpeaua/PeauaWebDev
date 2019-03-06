let transitions = document.body.style.backgroundColor;
let clickMe = document.querySelector('#button');

const white = "white";
const red = "red";
const blue = "blue";
const green = "green";
const yellow = "yellow";

let changeColor = bodyColor => {
	if (bodyColor === 'white') {
		bodyColor = red;
	} else if (bodyColor === 'red') {
		bodyColor = blue;
	}
};

clickMe.onclick = () => {
	changeColor(transitions);
}


