import { appState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";
import { Pop } from "../Utils/Pop.js";

function _drawClock(){
    let timeString = "";
    timeString += appState.brokenTime ? (appState.time.hour % 12 === 0 ? "12" : appState.time.hour % 12) : (appState.time.hour < 10 ? "0" + appState.time.hour : appState.time.hour);
    timeString += ":";
    timeString += appState.time.minute < 10 ? "0" + appState.time.minute : appState.time.minute;
    if(appState.brokenTime){
        timeString += appState.time.hour < 12 ? " AM" : " PM";
    }
    document.getElementById("clock").innerText = timeString;
}

export class ClockController{
    constructor(){
        appState.on("time", _drawClock);
        appState.on("brokenTime", _drawClock);
        _drawClock()
    }

    switchFormat(){
        try {
            clockService.switchFormat();
        } catch (error) {
            console.error("clock format error", error.message);
            Pop.toast(error.message, "error");
        }
    }
}









// function _drawClock() {
//     // let timeString = "";
//     let currentTime = new Date();
//     let h = currentTime.getHours()
//     let m = currentTime.getMinutes();
//     document.getElementById('clock').innerHTML = h + ":" + m;
//     setTimeout('renderTime(), 1000');
//     let dayTime = "AM";
//     if (h === 0) {
//         h = 12;
//     } else if (h > 12) {
//         h = h - 12;
//         dayTime = "PM"
//     }
//     if (h < 10) {
//         h = "0" + h;
//     } if (m < 10) {
//         m = "0" + m;
//     }
// }

// export class ClockController {

//     constructor() {
//         _drawClock()
//     }

// }