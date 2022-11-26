import { appState } from "../appState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js"


function _drawTodos() {
    let myTodos = appState.todos
    let template = ''
    // myTodos.forEach(t => template += t.TodoTemplate)
    myTodos.forEach(t => template += "I exist to terrorize")
    setHTML('todo', template)
    // document.getElementById('todos').innerHTML = template
    // form(reset)
    // window.event.preventDefault()
    document.getElementById('quote').innerHTML = appState.todos.TodosTemplate

}

function _drawCompleted() {
    let template = ''
    appState.todos.find(t => template += t.CompletedTemplate)
    document.getElementById('completed').innerHTML = template
}

export class TodosController {
    constructor() {
        this.getTodos()
        appState.on('todos', _drawTodos)
        appState.on('todos', _drawCompleted)
        // _drawTodos()
    }

    async addTodo() {
        window.event.preventDefault();
        try {
            const form = window.event.target

            const todoData = {
                description: form.description.value
            }
            console.log(todoData);
            form.reset()
            await todosService.addTodo(todoData)
        } catch (error) {
            console.error("[list form error]", error)
        }
        // _drawTodos()
    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            Pop.toast(error.message, 'error')
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
    async trackTodo(id) {
        try {
            await todosService.trackTodo(id)
        } catch (error) {
            console.log(error)
        }
    }

}

