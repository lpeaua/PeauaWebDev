let transitions = document.body.style.backgroundColor;
let clickMe = document.querySelector('#button');


const changeColor = () => {
	transitions = "red";
};

clickMe.onclick = () => {
	changeColor();
};


