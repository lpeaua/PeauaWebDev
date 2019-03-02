let currentlyPlaying = true;

let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.querySelector('#door2');
let doorImage3 = document.querySelector('#door3');

//paths to the "open door" image.
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

const spaceDoorPath = 
"https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"

// Path to the "closed door" image.
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

let startButton = document.getElementById('start');

const isBot = door => {
  return (door.src !== botDoorPath) ? false : true;
}

const isClicked = door => {
   return (door.src === closedDoorPath) ? false : true;
}

const playDoor = door => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver('win');
    //document.body.style.backgroundColor = 'red';
  } else if(isBot(door) === true) {
    gameOver('lose');
   // document.body.style.backgroundColor = 'white';
  }
};

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*  numClosedDoors);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  } else if (choreDoor === 2) {
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  }
};

doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
                                       }
};

doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentlyPlaying) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
                                       }
};

doorImage3.onclick = () => {
 if(!isClicked(doorImage3) && currentlyPlaying) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
                                       }
};

const startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = "Good Luck!"
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound()
  }    
}

const gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = "You win! Play again?"
  } else {
    startButton.innerHTML = "Game over! Play again?"
  }
};

startRound()


