import { appState } from "../AppState.js";

function _renderTime() {
    const newTime = new Date();
    const newTimeObj = {
        hour: newTime.getHours(),
        minute: newTime.getMinutes()
    }
    appState.time = newTimeObj;
    setTimeout(_renderTime, 1000);
}

function _saveFormat() {
    window.localStorage.setItem("inspire_timeFormat", appState.brokenTime);
}

class ClockService {
    constructor(){
        let loadedFormat = window.localStorage.getItem("inspire_timeFormat");
        if(loadedFormat){
            appState.brokenTime = loadedFormat === "true" ? true : false;
        }
        _renderTime()
    }

    switchFormat(){
        appState.brokenTime = !appState.brokenTime;
        _saveFormat()
    }

}

export const clockService = new ClockService();