import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js";

class QuoteService {
    async getQuote() {
        console.log('quote service is up');
        const res = await sandboxApi.get('quotes')
        const quote = new Quote(res.data)
        appState.quote = quote

    }

}


export const quoteService = new QuoteService()