const newYear = "1 Jan 2023";
    const daysCont = document.getElementById("days");
    const hoursCont = document.getElementById("hours");
    const minsCont = document.getElementById("min");
    const secsCont = document.getElementById("sec");

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const sedconds = (newYearDate - currentDate)/1000;

    const days = Math.floor(sedconds / (60*60*24));
   
    const hours = Math.floor(sedconds / (60*60))%24;
    const minutes = Math.floor(sedconds/ 60) % 60 ;
    const secLeft = Math.floor(sedconds) % 60;

    daysCont.innerHTML = days;
    hoursCont.innerText = hours;
    minsCont.innerText = minutes;
    secsCont.innerText = secLeft;
debugger
    if(days === 0 && hours === 0 && minutes === 0 && secLeft === 0){
        const timer = document.querySelector("div.countdown-container");
        timer.style.display = "none";
        const title = document.querySelector("h1");
        title.innerHTML = "Happy New 2023";

    }
}
countdown();
setInterval(countdown, 1000);