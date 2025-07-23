$(document).ready(function () {
  const API_URL = "http://localhost:3000/todos";

  // Function to fetch all todos from the API
  async function fetchTodos() {
    try {
      const response = await fetch(API_URL);
      const todos = await response.json();
      return todos;
    } catch (error) {
      console.error("Error fetching todos:", error);
      return [];
    }
  }

  // Function to add a new todo via API
  async function addTodo(text) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          completed: false,
        }),
      });
      const newTodo = await response.json();
      return newTodo;
    } catch (error) {
      console.error("Error adding todo:", error);
      return null;
    }
  }

  // Function to update a todo via API
  async function updateTodo(id, updates) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      });
      const updatedTodo = await response.json();
      return updatedTodo;
    } catch (error) {
      console.error("Error updating todo:", error);
      return null;
    }
  }

  // Function to delete a todo via API
  async function deleteTodo(id) {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      return true;
    } catch (error) {
      console.error("Error deleting todo:", error);
      return false;
    }
  }

  // Function to render the todos
  async function render() {
    // Clear the current list
    $("#todoList").empty();

    // Fetch todos from API
    const todos = await fetchTodos();

    // Loop through the todos array and append each todo to the list
    todos.forEach(function (todo) {
      let todoItem = `<li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="todo-text ${
                                  todo.completed ? "completed" : ""
                                }">${todo.text}</span>
                                <div>
                                    <button class="btn btn-sm btn-secondary editTodo" data-id="${
                                      todo.id
                                    }">Edit</button>
                                    <button class="btn btn-sm btn-success toggleTodo" data-id="${
                                      todo.id
                                    }">${
        todo.completed ? "Incomplete" : "Complete"
      }</button>
                                    <button class="btn btn-sm btn-danger deleteTodo" data-id="${
                                      todo.id
                                    }">Delete</button>
                                </div>
                            </li>`;
      $("#todoList").append(todoItem);
    });
  }

  // Call the render function
  render();

  // Add a new to-do
  $("form").submit(async function (event) {
    event.preventDefault(); //stops the page from refreshing
    let todoText = $("#newTodo").val().trim();
    if (todoText !== "") {
      const newTodo = await addTodo(todoText);
      if (newTodo) {
        $("#newTodo").val("");
        render(); // Re-render the list
      }
    } else {
      alert("Please enter a to-do");
    }
  });

  // Toggle todo as completed or not completed
  $(document).on("click", ".toggleTodo", async function () {
    const todoId = $(this).data("id");
    const todoTextElement = $(this).closest("li").find(".todo-text");
    const isCompleted = todoTextElement.hasClass("completed");

    const success = await updateTodo(todoId, { completed: !isCompleted });
    if (success) {
      render(); // Re-render the list
    }
  });

  // Delete a todo
  $(document).on("click", ".deleteTodo", async function () {
    const todoId = $(this).data("id");
    const success = await deleteTodo(todoId);
    if (success) {
      render(); // Re-render the list
    }
  });

  // Edit a todo
  $(document).on("click", ".editTodo", async function () {
    const todoId = $(this).data("id");
    const todoTextElement = $(this).closest("li").find(".todo-text");
    let currentText = todoTextElement.text();
    let newText = prompt("Edit your to-do:", currentText);
    if (newText !== null && newText.trim() !== "") {
      const success = await updateTodo(todoId, { text: newText.trim() });
      if (success) {
        render(); // Re-render the list
      }
    }
  });
});
