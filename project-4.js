// variables

let playStopBtn = document.getElementById('Play-Stop-btn');
let resetBtn = document.getElementById('Reset-btn');


// variables for time values

let seconds = 0 ;
let minutes = 0 ;
let hours = 0 ;

// variables for leading zero

leadingSeconds = 0 ;
leadingMinutes = 0 ;
leadingHours = 0 ;

// variables for set interval & timerstatus

let timerInterval = null;
let timerStatus = "stopped"

// Stop Watch Function

function stopWatch() {
  seconds++;
  if(seconds/60 === 1 ){
    seconds = 0;
    minutes++;
    if(minutes/60 === 1){
        minutes = 0;
        hours++;
    }
  }

  if(seconds < 10){
    leadingSeconds = '0' + seconds.toString();
  }else{
    leadingSeconds = seconds;
  }

  if(minutes < 10){
    leadingMinutes = '0' + minutes.toString();
  }else{
    leadingMinutes = minutes;
  }
  if(hours < 10){
    leadingHours = '0' + hours.toString();
  }else{
    leadingHours = hours;
  }

  let displayTimer = document.getElementById('timer').innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}


playStopBtn.addEventListener('click',function(){

    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch , 1000 /* in ms => يشتغل وهون حددتها 1000 ملي سكند يعني ثانية وحدة function هون بحدد كل قديش بدي ال  */);
        playStopBtn.innerHTML = `<i class = "fa fa-pause" id = "pause"></i>`;
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval); /* بداخلها حتى تتوقف setInterval لل variable عن طريق وضع ال  timer بستخدمها لما اجي بدي اوقف ال  */
        playStopBtn.innerHTML = `<i class = "fa fa-play" id = "play"></i>`;
        timerStatus = "stopped";
    }
})

resetBtn.addEventListener('click' , function(){
      window.clearInterval(timerInterval);
      seconds = 0 ;
       minutes = 0 ;
       hours = 0 ;
      
    document.getElementById('timer').innerText = "00:00:00";
    playStopBtn.innerHTML = `<i class = "fa fa-play" id = "play"></i>`;
    timerStatus = "stopped";
});