class Beat {
    constructor(Msrc) {
        this.beat = new Audio(Msrc)
    }
    play = () => {
        this.beat.currentTime = 0;
        this.beat.play();
    }
}

class BTN {
    constructor(color, keycode) {
        this.color = color;
        this.keyCode = keycode;
        this.element = document.getElementById(`${keycode}`);
        this.setButtonColorInHTML();
    }
    setButtonTransition = () => {
        this.element.addEventListener('transitionend', () => {
            this.deselect();
        });
    }

    setButtonColorInHTML = () => {
        let btn_color = document.getElementById(this.keyCode);
        btn_color.style.borderColor = "#000";
    }

    select = () => {
        let bg_color = document.getElementById(this.keyCode);
        bg_color.style.boxShadow = `0px 0px 25px 0px ${this.color}`
    }

    deselect = () => {
        let bg_color = document.getElementById(this.keyCode);
        bg_color.style.boxShadow = "";
        bg_color.style.borderColor = "#000";
    }
}