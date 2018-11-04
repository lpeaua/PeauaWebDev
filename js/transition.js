// transition background color

var colors = ["red", "blue", "green", "yellow"],   // the color choices
      index = 0;                                     // index of the current color

var songsArray = ["jungle.mp3", "shutInFairy.mp3"]
	  
document.getElementById("button").onclick = function() {
  document.body.style.background = colors[index];  // set the color of body to the current color
  index = (index + 1) % colors.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)
  var audio = document.getElementById("audio");
  if (a==1) {
	  audio.src = 'audio_file1';
	  a = 4;
  }
  else if (a==)

}

function playAudio(){
    var audio1 = document.getElementById('audio1');
    var audio2 = document.getElementById('audio2');
    audio1.play();
    audio2.play();
}

// transition audio files

/* var a = 1;

function changeAudio() {
	var audio = document.getElementById('playAudio');
	if (a==1) {
		audio.src = ''
	}
}

*/