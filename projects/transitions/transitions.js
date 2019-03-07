let transitions = document.body;
let clickMe = document.querySelector('#button');
let counter = 0;

const increment = () => {
	counter += 1;
	if (counter === 6) {
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
	} else if (count === 4){
		transitions.style.backgroundColor = "yellow";
	} else if (count === 5){
		transitions.style.backgroundColor = "purple";
	} else {
		transitions.style.backgroundColor = "orange"
	}
};

clickMe.onclick = () => {
	increment();
	colorChange(counter);
};
