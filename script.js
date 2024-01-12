let hrHand = document.querySelector(".hrHand");
let minHand = document.querySelector(".minHand");
let secHand = document.querySelector(".secHand");
let digitalClock = document.querySelector(".digitalClock");

setInterval(() => {
  let date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hrRotate = (hr / 12) * 360 + (min / 60) * 30;
  hrRotate = Math.round(hrRotate * 10) / 10;
  let minRotate = (min / 60) * 360;
  let secRotate = (sec / 60) * 360;

  hrHand.style.transform = `rotate(${hrRotate}deg)`;
  minHand.style.transform = `rotate(${minRotate}deg)`;
  secHand.style.transform = `rotate(${secRotate}deg)`;

  digitalClock.innerText = date.toLocaleTimeString();
}, 1000);
