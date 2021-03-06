let transitions = document.body;
let clickMe = document.querySelector('#button');
let dropShadow = document.querySelector('.footer');
let counter = 0;

const increment = () => {
	counter += 1;
	if (counter === 7) {
		counter = 0;
	}
};

const colorChange = count => {
	if (count === 0){
		transitions.style.backgroundColor = "white";
		dropShadow.style.boxShadow = '10px 10px 5px grey';
	} else if (count === 1){
		transitions.style.backgroundColor = "red";
        dropShadow.style.boxShadow = '0 0 5px transparent';
	} else if (count === 2){
		transitions.style.backgroundColor = "blue";
	} else if (count === 3){
		transitions.style.backgroundColor = "green";
	} else if (count === 4){
		transitions.style.backgroundColor = "yellow";
	} else if (count === 5){
		transitions.style.backgroundColor = "purple";
	} else if (count > 5) {
		transitions.style.backgroundColor = "grey";
	}
};

clickMe.onclick = () => {
	increment();
	colorChange(counter);
};
