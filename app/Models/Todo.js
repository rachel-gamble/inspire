export class Todo {
    constructor(data) {
        this.id = data.id;
        this.completed = data.completed || false;
        this.description = data.description;
    }

    get Template() {
        const iconClass = this.completed ? "mdi mdi-24px mdi-checkbox-marked-circle-outline" : "mdi mdi-24px mdi-circle-outline";
        const textStyle = this.completed ? "text-decoration: line-through; " : "";

        return `
        <div class="d-flex align-items-center">
            <div onclick="app.todosController.toggleTodo('${this.id}')" class="d-flex align-items-center flex-grow-1 selectable no-select">
                <i class="${iconClass} me-2 text-light"></i>
                <span style="${textStyle}">${this.description}</span>
            </div>
            <i class="mdi mdi-24px action mdi-delete-forever on-hover text-danger ms-2" onclick="app.todosController.deleteTodo('${this.id}')"></i>
        </div>
        `
    }
}




