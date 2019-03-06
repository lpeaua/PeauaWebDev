let transitions = document.body;
let clickMe = document.querySelector('#button');


const changeColor = () => {
	transitions.style.backgroundColor = "red";
	if (transitions.style.backgroundColor === "red") {
		transitions.style.backgroundColor = "blue";
	}
};

clickMe.onclick = () => {
	changeColor();
};


