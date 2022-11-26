import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js"
import { Pop } from "../Utils/Pop.js"


class TodosService {

    async trackTodo(id) {
        let foundTodo = appState.todos.find(t => t.id == id)
        foundTodo.completed = !foundTodo.completed
        const res = await sandboxApi.put('sautrah/todos/' + foundTodo.id, foundTodo)
        const editedTodo = appState.todos.findIndex(t => t.id == res.data.id)
        const newTodo = new Todo(res.data)
        appState.todos.splice(editedTodo, 1, newTodo)
        appState.todos = appState.todos
    }

    async addTodo(todoData) {
        const res = await sandboxApi.post('sautrah/todos', todoData)
        appState.todos = [...appState.todos, new Todo(res.data)]
    }

    async getTodos() {
        try {
            const res = await sandboxApi.get('sautrah/todos')
            appState.todos = res.data.map(t => new Todo(t))
            appState.todos = appState.todos
            console.log("The appState", appState.todos);
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }


    async deleteTodo(id) {
        await sandboxApi.delete('sautrah/todos/', + id)
        appState.todos = appState.todos.filter(t => t.id !== id)
    }


}


export const todosService = new TodosService()