// DOM selectors
const stars = document.getElementById('stars');
const starsCtx = stars.getContext('2d');

// global variables
let screen, starsElements, starsParams = { speed: 0.5, number: 300, extinction: 4 }, audio;

// run stars
setupStars();
updateStars();

// update stars on resize to keep them centered
window.onresize = function() {
    setupStars();
};

// star constructor
function Star() {
    this.x = Math.random() * stars.width;
    this.y = Math.random() * stars.height;
    this.z = Math.random() * stars.width;

    this.move = function() {
        this.z -= starsParams.speed;
        if (this.z <= 0) {
            this.z = stars.width;
        }
    };

    this.show = function() {
        let x, y, rad, opacity;
        x = (this.x - screen.c[0]) * (stars.width / this.z);
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * (stars.width / this.z);
        y = y + screen.c[1];
        rad = stars.width / this.z;
        opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;

        starsCtx.beginPath();
        starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
        starsCtx.arc(x, y, rad, 0, Math.PI * 2);
        starsCtx.fill();
    }
}

// setup <canvas>, create all the starts
function setupStars() {
    screen = {
        w: window.innerWidth,
        h: window.innerHeight,
        c: [ window.innerWidth * 0.5, window.innerHeight * 0.5 ]
    };
    window.cancelAnimationFrame(updateStars);
    stars.width = screen.w;
    stars.height = screen.h //- document.getElementsByClassName('navbar')[0].offsetHeight;
    starsElements = [];
    for (let i = 0; i < starsParams.number; i++) {
        starsElements[i] = new Star();
    }
}

// redraw the frame
function updateStars() {
    starsCtx.fillStyle = "black";
    starsCtx.fillRect(0, 0, stars.width, stars.height);
    starsElements.forEach(function (s) {
        s.show();
        s.move();
    });
    window.requestAnimationFrame(updateStars);
}


function get_number()
{
    const number = document.getElementById("number").value;
    toggle_Audio()
    if (number >= 0)
    {
        if (get_angle(number) > "9")
        {
            get_angle(number)
        }
    }

}

function get_angle(number)
{
    if (number > 10)
    {
        let temp = sum(number),
        angle_number = 0;

        if (temp > 10){
            number = sum(temp)
            play_message(number)
        }
        else
        {
            number = sum(temp)
            play_message(number)
        }
    }
    else if (number <= 10)
    {
        switch (number)
        {
            case "0":
                play_message(number)
                break;
            case "1":
                play_message(number)
                break;
            case "2":
                play_message(number)
                break;
            case "3":
                play_message(number)
                break;
            case "4":
                play_message(number)
                break;
            case "5":
                play_message(number)
                break;
            case "6":
                play_message(number)
                break;
            case "7":
                play_message(number)
                break;
            case "8":
                play_message(number)
                break;
            case "9":
                play_message(number)
                break;
            case "10":
                play_message(number)
                break;
        }
    }

}

function sum(number)
{
    let value = number,
    sum = 0;
    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }
    return sum
}

function play_message(number)
{
    audio = new Audio(`audio/${number}.mp3`);
    document.getElementById("background_music").volume = 0.2
    audio.play()

}

function toggle_Audio()
{
    if (audio !== undefined)
    {
        audio.pause()
    }
}
const card_margin = screen.h / 2 -  document.getElementsByClassName("card")[0].offsetHeight
document.getElementsByClassName("card")[0].setAttribute("style", `margin-top: ${card_margin}px !important`)

const footer =screen.h - document.getElementsByTagName("body")[0].offsetHeight ;
document.getElementsByTagName("footer")[0].setAttribute("style", `margin-top: ${footer}px !important`)
