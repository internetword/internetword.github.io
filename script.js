let p = document.querySelector('p');

let Sbutton = document.querySelector('button:first-of-type');
let Ebutton = document.querySelector('button:nth-of-type(2)');
let Rbutton = document.querySelector('button:last-of-type');

function StandardTime (duration) {
    let hours = Math.trunc(duration / 1000 / 60 / 60 /24);
    let minutes = Math.trunc(duration / 1000 / 60 % 60);
    let seconds = Math.trunc(duration / 1000 % 60);
    let milliseconds = duration % 1000;

    return  hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
}

function Stopwatch () {
    let startT, endT, duration = 0;

    this.start = function () {
        startT = Date.now();
    }

    this.stop = function () {
        endT = Date.now();
        duration += endT - startT;

        p.textContent = StandardTime(duration);
    }

    this.reset = function () {
        duration = 0;
        p.textContent = StandardTime(duration);
    }
}

Sbutton.addEventListener('click', () => Stopwatch.start());
Ebutton.addEventListener('click', () => Stopwatch.stop());
Rbutton.addEventListener('click', () => Stopwatch.reset());