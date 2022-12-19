let p = document.querySelector('p');

let Sbutton = document.querySelector('button:first-of-type');
let Ebutton = document.querySelector('button:nth-of-type(2)');
let Rbutton = document.querySelector('button:last-of-type');

function StandardTime (duration) {
    let hours = Math.trunc(duration / 1000 / 60 / 60 / 24);
    let minutes = Math.trunc(duration / 1000 / 60 % 60);
    let seconds = Math.trunc(duration / 1000 % 60);
    let milliseconds = duration % 1000;

    return  hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
}

function Stopwatch () {
    let startT, endT, duration, running = 0;

    this.start = function () {
        if (running) {
            p.textContent = 'Already started.';
        } else {
        startT = Date.now();
        running = true;
        }
    }

    this.stop = function () {
        if (running) {
        endT = Date.now();
        duration += endT - startT;
        p.textContent = StandardTime(duration);
        running = false;
        } else {
            p.textContent = 'Already stopped';
        }
    }

    this.reset = function () {
        if (duration = 0) {
            p.textContent = `Already at ${duration}`;
        } else {
        duration = 0;
        p.textContent = StandardTime(duration);
        }
    }
}

let stopwatch = new Stopwatch();

Sbutton.addEventListener('click', () => stopwatch.start());
Ebutton.addEventListener('click', () => stopwatch.stop());
Rbutton.addEventListener('click', () => stopwatch.reset());