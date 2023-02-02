 document.getElementById("days");
 document.getElementById("hours");
const newYears ="25 april 2023";
function countdown() {
    const newYearsDate =new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24) ;
    const hours = Math.floor(totalSeconds / 3600 ) % 24 ;
    const minutes = Math.floor(totalSeconds / 60)% 60 ;
    const seconds = Math.floor(totalSeconds) % 60;
    //console.log(days);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
//initial call
countdown();
setInterval(countdown, 1000);
