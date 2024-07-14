let circularProgress = document.querySelector(".circular-progresstwo"),
    progressValue = document.querySelector(".progress-valuetr");
let progressStartValue = 0,    
    progressEndValue = 40 ,    
    speed = 20;
    
let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circular-progresstwo.style.background = `conic-gradient(#ffc92a  ${progressStartValue * 3.6}deg, #ededed 0deg)`
    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);
