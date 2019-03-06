let transitions = document.body;
let clickMe = document.querySelector('#button');


clickMe.onclick = () => {
	changeColor();
};


const changeColor = () => {
	transitions.style.backgroundColor = "red";
	if (transitions.style.backgroundColor === "red") {
		transitions.style.backgroundColor = "blue";
	} else if (transitions.style.backgroundColor === "blue") {
		transitions.style.backgroundColor = "green";
	}
};