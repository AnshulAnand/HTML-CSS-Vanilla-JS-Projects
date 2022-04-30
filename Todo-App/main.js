const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");
const clearAllBtn = document.getElementById("clear-all-btn");
const ul = document.getElementById("todo-lists");
const showTodoLeft = document.getElementById("show-no.of-todo");

showTodoList();

function addToList() {
  var todo = {
    todo: input.value,
  };
  if (localStorage.getItem("todoList") == null) {
    var todoList = [];
    todoList.push(todo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    showTodoList();
  } else {
    todoList = JSON.parse(localStorage.getItem("todoList"));
    todoList.push(todo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    showTodoList();
  }
}

function showTodoList() {
  todoList = JSON.parse(localStorage.getItem("todoList"));
  ul.innerHTML = "";
  if (todoList.length == 0 || localStorage.getItem("todoList") == null) {
    ul.innerHTML = "";
    ul.innerHTML += `
      <i class="bi bi-list-check" id="list-check"></i>
      <p id="list-check-p">No tasks pending!</p>
      `;
  } else {
    todoList.forEach((element) => {
      ul.innerHTML +=
        "<li>" +
        '<div class="todo">' +
        "<p>" +
        element.todo +
        "</p>" +
        '<button id="delete-btn" onclick="deleteTodo(\'' +
        element.todo +
        '\')"><i class="bi bi-trash-fill"></i></button>' +
        "</div>" +
        "</li>";
    });
  }
  showTodoCount();
  input.value = "";
}

function deleteTodo(todo) {
  todoList = JSON.parse(localStorage.getItem("todoList"));
  todoList.forEach((element) => {
    if (element.todo == todo) {
      todoList.splice(todoList.indexOf(element.todo), 1);
    }
    localStorage.setItem("todoList", JSON.stringify(todoList));
    showTodoList();
  });
}

function deleteAll() {
  todoList = JSON.parse(localStorage.getItem("todoList"));
  todoList = [];
  localStorage.setItem("todoList", JSON.stringify(todoList));
  showTodoList();
}

function showTodoCount() {
  todoList = JSON.parse(localStorage.getItem("todoList"));
  showTodoLeft.innerText = `You have ${todoList.length} pending tasks`;
}
