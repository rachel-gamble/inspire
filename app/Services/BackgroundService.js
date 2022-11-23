import { appState } from "../AppState.js"
import { Background } from "../Models/Background.js";
import { sandboxApi } from "./AxiosService.js";

class BackgroundService {

    async getBackground() {
        const res = await sandboxApi.get('images')
        const backGround = new Background(res.data)
        appState.background = backGround
        console.log('background service is on');

    }
}

export const backgroundService = new BackgroundService()