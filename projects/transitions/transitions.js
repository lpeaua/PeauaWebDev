//let transitions = document.body.style.backgroundColor;
let clickMe = document.querySelector('#button');


const changeColor = () => {
	document.body.style.backgroundColor = "red";
};

clickMe.onclick = () => {
	changeColor();
};


