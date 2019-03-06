let transitions = document.body;
let clickMe = document.querySelector('#button');


const changeColor = () => {
	if (transitions.style.backgroundColor === "white") {
		transitions.style.backgroundColor = "red";
	} else if (transitions.style.backgroundColor === "red") {
		transitions.style.backgroundColor = "blue";
	}
};

clickMe.onclick = () => {
	changeColor();
};


