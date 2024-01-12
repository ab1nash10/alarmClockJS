let hrHand = document.querySelector(".hrHand");
let minHand = document.querySelector(".minHand");
let secHand = document.querySelector(".secHand");
let digitalClock = document.querySelector(".digitalClock");
let select = document.querySelectorAll("select");
let setAlarm = document.querySelector(".setAlarm");
let alarmTone = new Audio(
  "./assets/mixkit-rooster-crowing-in-the-morning-2462.wav"
);
for (let index = 12; index >= 1; index--) {
  index <= 9 ? (index = `0${index}`) : index;
  let option = `<option value="${index}">${index}</option>`;
  select[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let index = 59; index >= 0; index--) {
  index <= 9 ? (index = `0${index}`) : index;
  let option = `<option value="${index}">${index}</option>`;
  select[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let index = 0; index <= 1; index++) {
  let ampm;
  index == 0 ? (ampm = "AM") : (ampm = "PM");
  let option = `<option value="${ampm}">${ampm}</option>`;
  select[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
let isAlarm, timeSet;

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
  let ampm;
  if (hr >= 12) {
    hr = hr - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  hr <= 9 ? (hr = `0${hr}`) : hr;
  min <= 9 ? (min = `0${min}`) : min;

  if (isAlarm === `${hr}:${min} ${ampm}`) {
    alarmTone.play();
  } else {
  }
}, 1000);

setAlarm.addEventListener("click", () => {
  if (
    select[0].value !== "hours" &&
    select[1].value !== "minutes" &&
    select[2].value !== "AM/PM"
  ) {
    if (timeSet) {
      alarmTone.pause();
      isAlarm = "";
      select.forEach((e) => {
        e.disabled = false;
      });
      setAlarm.innerText = "Set Alarm";
      return (timeSet = false);
    }
    let hour = `${select[0].value}:${select[1].value} ${select[2].value}`;
    isAlarm = hour;
    timeSet = true;
    select.forEach((e) => {
      e.disabled = true;
    });
    setAlarm.innerText = "Clear Alarm";
  } else {
    alert("Please Provide Full Information to set Alarm");
  }
});
