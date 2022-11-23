import { appState } from "../appState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";


function _drawTodos() {
    let template = ''
    appState.todos.forEach(t => template += t.template)
    document.getElementById('todos').innerHTML = template
}

function _drawCompleted() {
    let template = ''
    appState.todos.find(t => template += t.CompletedTemplate)
    document.getElementById('fraction').innerHTML = template
}

export class TodosController {
    constructor() {
        this.getTodos()
        console.log('to dos controller on');
        appState.on('todos', _drawTodos)
    }

    async addTodo() {
        window.event.preventDefault();
        try {
            const form = window.event.target
            const todoData = {
                description: form.description.value
            }
            console.log(todoData);
            await todosService.addTodo(todoData)
        } catch (error) {
            console.error("[list form error]", error)
        }
    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            Pop.toast(error.message, "error")
            console.log(error);
        }
    }

    async deleteTodo(id) {
        if (window.confirm("Delete this to do?")) {
            try {
                await todosService.deleteTodo(id)
            } catch (error) {
                Pop.toast(error.message, 'error')
                console.log(error);

            }
        }
    }
    async trackTodo(id){
        try {
            await todosService.trackTodo(id)
        } catch (error) {
            console.log(error)
        }
    }

}

