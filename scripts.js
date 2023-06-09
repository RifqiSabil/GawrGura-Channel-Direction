let body = document.body;
let info = document.getElementById("info");
let mode = document.getElementById("mode");
let h1 = document.getElementById("h1");

const modeLimit = 5;
let modeCounter = 0;
let modeRemaining;

function darkMode(){
    
    if(modeRemaining == 0){
        info.textContent = "⛔ You are no longer to be able to switch the mode ⛔"; 
        console.log('You are no longer to be able to switch the mode');
        mode.style.display = "none";
        return;
    }

    modeCounter += 1;
    modeRemaining = modeLimit-modeCounter;

    if(modeRemaining%2 == 0){
        h1.textContent = "DARK MODE WEBSITE";
    } else{
        h1.textContent = "LIGHT MODE WEBSITE";
    }

    info.textContent = 'Mode has been clicked : ' + modeCounter + ' time(s) and your switch mode chance : ' + modeRemaining + ' time(s)';
    console.log('Mode has been clicked', modeCounter, 'time(s)');
    console.log('Your switch mode chance are/is', modeRemaining, 'time(s) left');
    body.classList.toggle("dark");
}

function reLoad(){
    location.reload();
}