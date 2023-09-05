function showTime(){
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session = "AM";

if(h == 0){
    h = 12 // changing 24 hours format to 12 hours
}

if(h > 12){    //13-12=1
    h = h - 12;
    session = "PM";
}

// if(h < 10){
//     h = "0" + h;  //0-9
// }

// if(m < 10){
//     m = "0" + m;
// }

// if(s < 10){
//     s = "0" + s;
// }

// alternativie for above code using ternary operator
// ? if true  : if false.
h = (h<10) ? "0" + h : h;
m = (m<10) ? "0" + m : m;
s = (s<10) ? "0" + s : s;

document.getElementById("DigitalClock").innerHTML = h + ":" + m + ":" + s + " "+ session;
//settimeout is used to tell till which time interval it should run.
setTimeout(showTime,1000);
}
showTime();























