let startBtn = document.querySelector("#startBtn");
let pauseBtn = document.querySelector("#pauseBtn");
let resumeBtn = document.querySelector("#resumeBtn");
let resetBtn = document.querySelector("#resetBtn");

let timerDisplay = document.querySelector("#timer");
let statusText = document.querySelector("#status");
let progressBar = document.querySelector("#progressBar");

let countdown;
let time = 0;
let totalTime = 0;
let isRunning = false;

startBtn.addEventListener("click", function () {

    let input = document.querySelector("#customTime").value;

    if (input === "" && time === 0) {
        statusText.textContent = "Enter time first!";
        return;
    }

    if (time === 0) {
        time = Number(input) * 60;
    }

    totalTime = time;

    clearInterval(countdown);
    isRunning = true;

    countdown = setInterval(() => {

        let min = Math.floor(time / 60);
        let sec = time % 60;

        sec = sec < 10 ? "0" + sec : sec;

        timerDisplay.textContent = `${min}:${sec}`;

        let progress = totalTime ? ((totalTime - time) / totalTime) * 100 : 0;
        progressBar.style.width = progress + "%";

        if (time <= 0) {
            clearInterval(countdown);
            statusText.textContent = "Session Completed ";
            beep.play();
        }

        time--;

    }, 1000);

    statusText.textContent = "Focus Started...";
});

pauseBtn.addEventListener("click", function () {
    clearInterval(countdown);
    isRunning = false;
    statusText.textContent = "Paused";
});

resumeBtn.addEventListener("click", function () {

    if (isRunning || time <= 0) return;

    isRunning = true;

    countdown = setInterval(() => {

        let min = Math.floor(time / 60);
        let sec = time % 60;

        sec = sec < 10 ? "0" + sec : sec;

        timerDisplay.textContent = `${min}:${sec}`;

        let progress = totalTime ? ((totalTime - time) / totalTime) * 100 : 0;
        progressBar.style.width = progress + "%";

        if (time <= 0) {
            clearInterval(countdown);
            alert("Session Completed");
            statusText.textContent = "Session Completed ";
            beep.play();
        }

        time--;

    }, 1000);

    statusText.textContent = "Resumed";
});


resetBtn.addEventListener("click", function () {

    clearInterval(countdown);

    time = 0;
    totalTime = 0;
    isRunning = false;

    document.querySelector("#customTime").value = "";

    timerDisplay.textContent = "00:00";
    progressBar.style.width = "0%";

    statusText.textContent = "Ready";

});
