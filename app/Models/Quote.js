export class Quote {
    constructor(data) {

        this.content = data.content
        this.author = data.author
    }

    get Template() {
        return /*html*/ `
        <div onclick="app.quoteController.getQuote()" class="rounded selectable poppin p-2 fs-4 text fw-bold"
        title="Click for new quotes"><span>"${this.content}"</span><br><span class="on-hover fs-6">- ${this.author}</span>
      </div>
        `
    }
}