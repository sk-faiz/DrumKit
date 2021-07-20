let beats = {
  "87": {
      beat: new Beat("./sounds/tom-1.mp3"),
      button: new BTN("#FFFF", 87)
  },
  "65": {
     beat: new Beat("./sounds/tom-2.mp3"),
     button: new BTN("#FFFF", 65)
  },
  "83": {
     beat: new Beat("./sounds/tom-3.mp3"),
     button: new BTN("#FFFF", 83)
  },
  "68": {
     beat: new Beat("./sounds/tom-4.mp3"),
     button: new BTN("#FFFF", 68)
  },
  "74": {
     beat: new Beat("./sounds/snare.mp3"),
     button: new BTN("#FFFF", 74)
  },
  "75": {
     beat: new Beat("./sounds/crash.mp3"),
     button: new BTN("#FFFF", 75)
  },
  "76": {
     beat: new Beat("./sounds/kick-bass.mp3"),
     button: new BTN("#FFFF", 76)
  },
}

beatTrigger = (event) => {
  let keycode = event.keyCode;
  if (keycode in beats) {
    let key = beats[keycode];
    key.beat.play();
    key.button.select();
    key.button.setButtonTransition();
  }
}

document.addEventListener('keydown', beatTrigger);
