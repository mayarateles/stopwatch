let hourElement = document.querySelector(".hour");
let minuteElement = document.querySelector(".minute");
let secondElement = document.querySelector(".second");
let millisecondElement = document.querySelector(".milliSecond");

let cardHeader = document.getElementById("header");

let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let cancelButton = document.querySelector(".cancel");

let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;
let interval;

startButton.addEventListener("click", function () {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer, 10);
});

function startTimer() {
  millisecond++;
  if (millisecond < 9) {
    millisecondElement.innerText = "0" + millisecond;
  }
  if (millisecond > 99) {
    second++;
    secondElement.innerText = "0" + second;
    millisecond = 0;
    millisecondElement.innerText = "0" + millisecond;
  }
  if (second > 59) {
    minute++;
    minuteElement.innerText = "0" + minute;
    second = 0;
    secondElement.innerText = "0" + second;
  }
  if (minute > 59) {
    hour++;
    hourElement.innerText = "0" + hour;
    minute = 0;
    minuteElement.innerText = "0" + minute;
  }
  if (millisecond > 9) {
    millisecondElement.innerText = millisecond;
  }
  if (second > 9) {
    secondElement.innerText = second;
  }
  if (minute > 9) {
    minuteElement.innerText = minute;
  }
  if (hour > 9) {
    hourElement.innerText = hour;
  }
}

cancelButton.addEventListener("click", function () {
  clearInterval(interval);
  resetTimer();
});

stopButton.addEventListener("click", function () {
  clearInterval(interval);
});

function resetTimer() {
  hourElement.textContent = "00";
  minuteElement.textContent = "00";
  secondElement.textContent = "00";
  millisecondElement.textContent = "00";
  hour = 00;
  minute = 00;
  second = 00;
  millisecond = 00;
}

startButton.addEventListener("mouseover", function () {
  startButton.classList.add("lightgray");
  setTimeout(function () {
    startButton.classList.remove("lightgray");
  }, 300);
});
stopButton.addEventListener("mouseover", function () {
  stopButton.classList.add("lightgray");
  setTimeout(function () {
    stopButton.classList.remove("lightgray");
  }, 300);
});
cancelButton.addEventListener("mouseover", function () {
  cancelButton.classList.add("lightgray");
  setTimeout(function () {
    cancelButton.classList.remove("lightgray");
  }, 300);
});

cardHeader.addEventListener("mouseover", function () {
  cardHeader.classList.add("lightgray");
  setTimeout(function () {
    cardHeader.classList.remove("lightgray");
  }, 300);
});
