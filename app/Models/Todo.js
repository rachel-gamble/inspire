import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js"


export class Todo {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.user = data.user
        this.completed = data.completed || false
    }

    get TodoTemplate() {

        // FIXME problem is either here or in the todo controller constructor 

        return /*html*/ ` 
        <div class="d-flex justify-content-between p-1 border-bottom text-light rounded text mt-2">
    <input ${this.completed == true ? 'checked' : ''} onclick="app.todosController.trackTodo('${this.id}')" class='form-check-input me-1 action' name="done" type ='checkbox' id="done" value="yes" title="click to change status">
    <li>${this.description}
    </li>
    <i class="mdi mdi-alpha-x-circle-outline selectable pointer text-light on-hover rounded" title="Delete" onclick="app.todosController.deleteTodo('${this.id}')" minlength="3" maxlength="50">
    </i>
    </div>
    `
    }

    get Total() {
        let total = 0
        let completedTodos = appState.todos.filter(t => t.completed == true)
        total = completedTodos.length
        return total
    }

    get CompletedTemplate() {
        return `
    ${this.Total}/${appState.todos.length} completed 
    `
    }


}




