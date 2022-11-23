import { appState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";


function _drawQuote() {
    // console.log('quote')
    document.getElementById('quote').innerHTML = appState.quote.Template
}

export class QuoteController {
    constructor() {
        console.log('quote controller is on');
        appState.on('quote', _drawQuote)
        quoteService.getQuote()
    }


    async getQuote() {
        await quoteService.getQuote()
    }
}