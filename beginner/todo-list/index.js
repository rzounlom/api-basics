$(document).ready(function () {
  // Define the list default todos
  const defaultTodos = [
    { text: "Buy groceries", completed: false },
    { text: "Clean room", completed: false },
    { text: "Walk the dog", completed: false },
  ];

  // Function to render the todos
  function render() {
    // Clear the current list
    $("#todoList").empty();

    // Loop through the todos array and append each todo to the list
    defaultTodos.forEach(function (todo, index) {
      let todoItem = `<li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="todo-text ${
                                  todo.completed ? "completed" : ""
                                }">${todo.text}</span>
                                <div>
                                    <button class="btn btn-sm btn-secondary editTodo" data-index="${index}">Edit</button>
                                    <button class="btn btn-sm btn-success toggleTodo" data-index="${index}">${
        todo.completed ? "Incomplete" : "Complete"
      }</button>
                                    <button class="btn btn-sm btn-danger deleteTodo" data-index="${index}">Delete</button>
                                </div>
                            </li>`;
      $("#todoList").append(todoItem);
    });
  }

  //call the render function
  render();

  // Add a new to-do
  $("form").submit(function (event) {
    event.preventDefault(); //stops the page from refreshing
    let todoText = $("#newTodo").val().trim();
    if (todoText !== "") {
      let todoItem = `<li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="todo-text">${todoText}</span>
                                <div>
                                    <button class="btn btn-sm btn-secondary editTodo">Edit</button>
                                    <button class="btn btn-sm btn-success toggleTodo">Complete</button>
                                    <button class="btn btn-sm btn-danger deleteTodo">Delete</button>
                                </div>
                            </li>`;
      $("#todoList").append(todoItem);
      $("#newTodo").val("");
    } else {
      alert("Please enter a to-do");
    }
  });

  // Toggle todo as completed or not completed
  $(".toggleTodo").click(function () {
    $(this).closest("li").find(".todo-text").toggleClass("completed");
    $(this).text(function (i, text) {
      return text === "Complete" ? "Incomplete" : "Complete";
    });
  });

  // Delete a todo
  $(".deleteTodo").click(function () {
    $(this).closest("li").remove();
  });

  // Edit a todo
  $(".editTodo").click(function () {
    let todoTextElement = $(this).closest("li").find(".todo-text");
    let currentText = todoTextElement.text();
    let newText = prompt("Edit your to-do:", currentText);
    if (newText !== null && newText.trim() !== "") {
      todoTextElement.text(newText.trim());
    }
  });
});
