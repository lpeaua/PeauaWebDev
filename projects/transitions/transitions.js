let transitions = document.body;
let clickMe = document.querySelector('#button');
let counter = 0;

const increment = () => {
	counter ++;
	if (counter === 4) {
		counter = 0;
	}
};

const colorChange = count => {
	if (count === 0){
		transitions.style.backgroundColor = "white";
	} else if (count === 1){
		transitions.style.backgroundColor = "red";
	} else if (count === 2){
		transitions.style.backgroundColor = "blue";
	} else if (count === 3){
		transitions.style.backgroundColor = "green";
	} else {
		transitions.style.backgroundColor = "yellow";
	}
};

clickMe.onclick = () => {
	colorChange(increment());
};
