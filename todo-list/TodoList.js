"use strict";

const TodoList = function() {
  this.template = `
    <div id="Form">
      <form id="todo-form">
        <input type="text" id="todo" />
        <input type="submit" value="Send" />
      </form>
      <ul id="todo-list"></ul>
    </div>
  `;

  let todoList = JSON.parse(localStorage.getItem("todos")) || [];

  this.updateTodos = function() {
    localStorage.setItem("todos", JSON.stringify(todoList));
  };

  this.render = function() {
    const html = todoList.map(item => `<li class="todo-item">${item}</li>`).join("");
    document.querySelector("#todo-list").innerHTML = html;
    // runs the event declarations with the new dom content
    this.events();
  };

  this.events = function() {
    document.querySelector("#todo-form").onsubmit = e => {
      e.preventDefault();
      const todo = document.querySelector("#todo");
      const todoText = todo.value;
      todo.value = "";
      if (todoText !== "") todoList.push(todoText);
      this.updateTodos();
      // renders everytime a variable changes
      this.render();
    }
    
    document.querySelectorAll(".todo-item").forEach((todoItem, index) => {
      todoItem.onclick = () => {
        todoList.splice(index, 1);
        this.updateTodos();
      // renders everytime a variable changes
        this.render();
      }
    });
  };
};
