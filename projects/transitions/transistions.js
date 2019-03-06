let transitions = document.body.style.backgroundColor;
let clickMe = document.querySelector('#button');


const changeColor = bodyColor => {
	if (bodyColor === 'white') {
		bodyColor = "red";
	} else if (bodyColor === 'red') {
		bodyColor = "blue";
	}
};

clickMe.onclick = () => {
	changeColor(transitions);
}


