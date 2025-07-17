const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

const digitalTime = () => {

    // create date object:
    const date = new Date();

    // extract hour, minutes, second:
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    // 12 hour format:
    let formatHour = hour % 12 || 12;
    
    // include "0" when less than "12":
    let hours = formatHour <= 9 ? `0${formatHour}` : formatHour;
    let minutes = minute <= 9 ? `0${minute}` : minute;
    let seconds = second <= 9 ? `0${second}` : second;

    // print in html:
    hr.textContent = hours;
    min.textContent = minutes;
    sec.textContent = seconds;

};

setInterval(digitalTime, 1000);