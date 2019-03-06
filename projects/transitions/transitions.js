let transitions = document.body.style.backgroundColor;
let clickMe = document.querySelector('#button');


const changeColor = bodyColor => {
	bodyColor = "red"
};

clickMe.onclick = () => {
	changeColor(transitions);
	document.write("Hi");
};


