import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";

function _drawTodos() {
    let todosTemplate = "";
    appState.todos.forEach(todo => todosTemplate += todo.Template);
    document.getElementById("todo-list").innerHTML = todosTemplate;

    const todos = appState.todos.length;
    const todosDone = appState.todos.filter(todo => todo.completed).length;
    const todoCountText = `${todos - todosDone} todo${todos - todosDone === 1 ? "" : "s"}`;
    document.getElementById("remaining-todos-offcanvas").innerText = todoCountText;
    document.getElementById("remaining-todos-button").innerText = todoCountText;
}

function _getAllTodos() {
    try {
        todosService.getAllTodos();
    }
    catch (error) {
        console.error("[GET ALL TODOS ERROR]", error.message);
        Pop.toast(error.message, "error");
    }
}

export class TodosController {
    constructor() {
        appState.on("todos", _drawTodos)
        _getAllTodos();
    }

    createTodo() {
        try {
            window.event.preventDefault();
            const inputElem = window.event.target.description;
            const newTodoDescription = inputElem.value;
            todosService.createTodo({ description: newTodoDescription });
            inputElem.value = "";
            inputElem.focus();
        }
        catch (error) {
            console.error("[CREATE TODO ERROR]", error.message);
            Pop.toast(error.message, "error");
        }
    }

    toggleTodo(todoId) {
        try {
            todosService.toggleTodo(todoId);
        }
        catch (error) {
            console.error("[TODO COMPLETION SWITCH ERROR]", error.message);
            Pop.toast(error.message, "error");
        }
    }

    async deleteTodo(todoId) {
        try {
            const deleteTask = await Swal.fire({
                title: "Delete Task?",
                text: "This cannot be undone.",
                icon: "warning",
                showCancelButton: true,
                cancelButtonColor: '#cbcbcb',
                confirmButtonColor: '#d33',
                confirmButtonText: "Delete"
            })
            if (deleteTask.isConfirmed) {
                todosService.deleteTodo(todoId);
            }
        }
        catch (error) {
            console.error("[DELETE TODO ERROR]", error.message);
            Pop.toast(error.message, "error");
        }
    }
}