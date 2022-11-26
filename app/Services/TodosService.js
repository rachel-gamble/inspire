import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js";

class TodosService {
    async getAllTodos() {
        const res = await sandboxApi.get("sautrah/todos");
        appState.todos = res.data.map(todo => new Todo(todo));
    }

    async createTodo(newTodoData) {
        // const newTodo = new Todo(newTodoData);
        const res = await sandboxApi.post("sautrah/todos", newTodoData);
        appState.todos = [...appState.todos, new Todo(res.data)]
    }

    async toggleTodo(todoId) {
        const foundTodo = appState.todos.find(todo => todo.id === todoId);
        if (foundTodo) {
            foundTodo.completed = !foundTodo.completed;
        }

        const res = await sandboxApi.put("sautrah/todos/" + foundTodo.id, foundTodo);
        const index = appState.todos.findIndex(todo => todo.id === res.data.id);
        appState.todos.splice(index, 1, new Todo(res.data));
        appState.todos = appState.todos;
    }

    async deleteTodo(todoId) {
        const res = await sandboxApi.delete("sautrah/todos/" + todoId);
        appState.todos = appState.todos.filter(todo => todo.id != todoId);
    }
}

export const todosService = new TodosService();