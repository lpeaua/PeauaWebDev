let transitions = document.body;
let clickMe = document.querySelector('#button');


const changeColor = () => {
	transitions.style.backgroundColor = "red";
};

clickMe.onclick = () => {
	changeColor();
};


