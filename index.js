let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("rbtn-reset");
let time = document.getElementById("time");
let pause = document.getElementById("btn-pause");
let set;
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
    value = value < 10 ? `0${value}` : value;
    return value;
}

reset.addEventListener(
    "click",
    (resetTime = () =>{
        pauseTimer();
        count = 59;
        minCount = 24;
        time.textContent = `${minCount + 1}::00`
    })
)

const removeFocus = () =>{
    buttons.forEach((btn)=>{
        btn.classList.remove("btn-focus")
    });
};
focusButton.addEventListener("click", () =>{
    removeFocus()
    focusButton.classList.add("btn-focus");
    pauseTimer()
    minCount = 24;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
})

shortBreakButton.addEventListener("click",()=>{
    removeFocus();
    shortBreakButton.classList.add("btn-focus");
    pauseTimer()
    minCount = 4;
    count = 59;
    time.textContent = `${appendZero(minCount + 1)}:00`
})

longBreakButton.addEventListener("click",()=>{
    removeFocus();
    longBreakButton.classList.add("btn-focus");
    pauseTimer()
    minCount = 14;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
})

pause.addEventListener(
    "click",
    (pauseTimer = () => {
        pause = true;
        clearInterval(set);
        startBtn.classList.remove("hide");
        pause.classList.remove("show");
        reset.classList.remove("show");
    })
)

startBtn.addEventListener("click",()=>{
    reset.classList.add("show");
    pause.classList.add("show");
    startBtn.classList.add("hide");
    startBtn.classList.remove("show");
    if(paused){
        paused = false;
        time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        set = setInterval(()=>{
            count--;
            time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
            if(count == 0){
                if(minCount != 0){
                    minCount--;
                    count = 60;
                }else{
                    clearInterval(set)
                }
            }
        },1000);
    }
})
