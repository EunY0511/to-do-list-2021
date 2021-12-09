const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];

const TODOS_KEY = "todos";

const BUTTON_NAME = "button-name";

function saveToDos() {
     localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
 }

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button")
    button.className = BUTTON_NAME;
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);    
    toDoList.appendChild(li);
}


function toDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
} else {

}

