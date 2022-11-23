import { appState } from "../AppState.js";
import { backgroundService } from "../Services/BackgroundService.js";

function _drawBackground() {
    document.body.style.backgroundImage = appState.background.Template
    document.getElementById('artist').innerText = appState.background.DetailsTemplate
}

async function _getBackground() {
    try {
        await backgroundService.getBackground()

    } catch (error) {
        window.Error("something went wrong again lol")
    }
}


export class BackgroundController {
    constructor() {
        appState.on('background', _drawBackground)
        _getBackground()
        // _drawBackground()
        console.log('background controller is on');
    }
}