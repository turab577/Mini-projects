function showTime(){
let time = new Date();
let hrs = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
hrs = (hrs < 10)? "0" + hrs : hrs;
min = (min < 10)? "0" + min : min;
sec = (sec < 10)? "0" + sec : sec;
let currentTime = hrs + ":" +min + ":" +sec;
document.getElementById('clock').innerHTML=currentTime;
console.log('currentTime');
}
setInterval(showTime,1000);
showTime();