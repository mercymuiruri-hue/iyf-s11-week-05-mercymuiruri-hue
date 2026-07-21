// DOM Elements
const todoForm = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = [];
let currentFilter = "all";

// Helper Function: Create and return li element
function createTodoElement(todo) {
  const li = document.createElement("li");
  li.dataset.id = todo.id;
  if (todo.completed) {
    li.classList.add("completed");
  }

  // Task Text Container
  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = todo.text;

  // Double-click to Edit (Bonus Requirement)
  span.addEventListener("dblclick", () => {
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.value = todo.text;
    li.replaceChild(editInput, span);
    editInput.focus();

    function saveEdit() {
      const updatedText = editInput.value.trim();
      if (updatedText) {
        todo.text = updatedText;
      }
      renderTodos();
    }

    editInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        saveEdit();
      } else if (e.key === "Escape") {
        renderTodos(); // Cancel edit
      }
    });

    editInput.addEventListener("blur", saveEdit);
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "×";

  li.append(span, deleteBtn);
  return li;
}

// Clear list and re-render based on filter
function renderTodos() {
  todoList.innerHTML = "";

  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === "active") return !todo.completed;
    if (currentFilter === "completed") return todo.completed;
    return true; // "all"
  });

  filteredTodos.forEach((todo) => {
    const li = createTodoElement(todo);
    todoList.appendChild(li);
  });

  updateStats();
}

// Add new todo to array and render
function addTodo(text) {
  if (!text.trim()) return;

  const newTodo = {
    id: Date.now().toString(),
    text: text.trim(),
    completed: false,
  };

  todos.push(newTodo);
  renderTodos();
}

// Toggle completed state
function toggleTodo(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  renderTodos();
}

// Remove from array and render
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

// Update items left count
function updateStats() {
  const activeCount = todos.filter((todo) => !todo.completed).length;
  itemsLeft.textContent = `${activeCount} ${activeCount === 1 ? "item" : "items"} left`;
}

// Set current filter and re-render
function filterTodos(filter) {
  currentFilter = filter;
  filters.forEach((btn) => {
    if (btn.dataset.filter === filter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  renderTodos();
}

// Event Listeners
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo(input.value);
  input.value = "";
});

// Handle click on tasks (delegation)
todoList.addEventListener("click", function (event) {
  const li = event.target.closest("li");
  if (!li) return;
  const id = li.dataset.id;

  if (event.target.classList.contains("delete-btn")) {
    deleteTodo(id);
  } else if (event.target.classList.contains("todo-text")) {
    toggleTodo(id);
  }
});

// Filter Buttons Listener
filters.forEach((button) => {
  button.addEventListener("click", () => {
    filterTodos(button.dataset.filter);
  });
});

// Clear Completed Button Listener
clearCompletedBtn.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  renderTodos();
});

// Initialize
renderTodos();