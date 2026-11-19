// JavaScript Mini Project — To-Do List
// Concepts: arrays, objects, DOM creation, DOM events, conditionals.

// BONUS I: Each task is an object with an ID, text, and done status.
const tasks = [];
let nextTaskId = 0;

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const listTasks = document.querySelector(".listTasks");
const formMessage = document.getElementById("formMessage");
const taskCount = document.getElementById("taskCount");

function updateCount() {
  const completed = tasks.filter(task => task.done).length;
  taskCount.textContent = `${completed} of ${tasks.length} complete`;
}

// Creates the HTML elements for one new task.
function createTaskElement(task) {
  const row = document.createElement("div");
  row.className = "task-row";
  row.dataset.taskId = task.task_id; // Adds data-task-id="0", "1", etc.

  // X button — Font Awesome icon, with a fallback if the internet is off.
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-button";
  deleteButton.setAttribute("aria-label", `Delete ${task.text}`);
  deleteButton.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i><span class="fallback-x" aria-hidden="true">×</span>';

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  checkbox.id = `task-${task.task_id}`;
  checkbox.checked = task.done;

  const label = document.createElement("label");
  label.className = "task-text";
  label.htmlFor = checkbox.id;
  label.textContent = task.text; // textContent safely inserts user-written text.

  row.appendChild(deleteButton);
  row.appendChild(checkbox);
  row.appendChild(label);
  return row;
}

// Exercise: Add a new task to the array AND the DOM.
function addTask(event) {
  if (event) event.preventDefault(); // Stop the form from reloading the page.
  const text = input.value.trim();

  if (text === "") {
    formMessage.textContent = "Please enter a task first.";
    input.setAttribute("aria-invalid", "true");
    input.focus();
    return;
  }

  const newTask = {
    task_id: nextTaskId,
    text: text,
    done: false
  };

  nextTaskId++; // Each task gets a new ID; deleted IDs are not reused.
  tasks.push(newTask);
  listTasks.appendChild(createTaskElement(newTask));

  input.value = "";
  input.removeAttribute("aria-invalid");
  formMessage.textContent = "";
  updateCount();
  input.focus();
}

// BONUS I: Update the object's done status and the red strikethrough.
function doneTask(taskId, checked) {
  const task = tasks.find(task => task.task_id === taskId);
  if (!task) return;

  task.done = checked;
  const row = listTasks.querySelector(`[data-task-id="${taskId}"]`);
  if (row) row.classList.toggle("completed", task.done);
  updateCount();
}

// BONUS II: Remove the task from the tasks array and from the DOM.
function deleteTask(taskId) {
  const index = tasks.findIndex(task => task.task_id === taskId);
  if (index === -1) return;

  tasks.splice(index, 1); // Remove one task from the array.
  const row = listTasks.querySelector(`[data-task-id="${taskId}"]`);
  if (row) row.remove();  // Remove that task's row from the page.
  updateCount();
}

// DOM event: the form's Submit button and Enter key both call addTask().
form.addEventListener("submit", addTask);
input.addEventListener("input", () => {
  formMessage.textContent = "";
  input.removeAttribute("aria-invalid");
});

// Event delegation: one listener handles checkboxes inside the list.
listTasks.addEventListener("change", function (event) {
  if (!event.target.matches(".task-checkbox")) return;
  const row = event.target.closest("[data-task-id]");
  doneTask(Number(row.dataset.taskId), event.target.checked);
});

// Event delegation: clicking the X icon or button deletes its row.
listTasks.addEventListener("click", function (event) {
  const button = event.target.closest(".delete-button");
  if (!button || !listTasks.contains(button)) return;
  const row = button.closest("[data-task-id]");
  deleteTask(Number(row.dataset.taskId));
});

updateCount();
