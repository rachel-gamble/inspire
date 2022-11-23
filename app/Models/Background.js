export class Background {
    constructor(data) {
        this.img = data.img || data.largeImgUrl
        this.artist = data.author
    }
    get Template() {
        return `url(${this.img})`
    }

    get DetailsTemplate() {
        return `
        ${this.artist}
        `
    }
}