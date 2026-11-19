# JavaScript DOM Mini Project — To-Do List

## How to run

1. Keep `index.html`, `style.css`, and `script.js` together.
2. Open `index.html` in Chrome or Safari. No installation needed.
3. Type a task and click Submit (or press Enter).
4. Check the box to mark a task as complete, or click X to delete it.

The project is also available as a self-contained `ToDoList_Standalone.html` download in the ChatGPT conversation.

## Assignment requirements

- Separate HTML, CSS, JS files.
- Form with text input, Submit button, and initially empty `.listTasks` div.
- `const tasks = []`, `addTask()`, and empty-input validation.
- X button using Font Awesome (and a plain-text X fallback when offline).
- Checkbox plus associated task label.
- Object structure `{ task_id, text, done }`, beginning at ID 0.
- `data-task-id` DOM attributes.
- `doneTask()` toggles a red strikethrough.
- `deleteTask()` removes the selected task from both array and DOM.
- Form submission and event delegation demonstrate DOM events.

Task data starts empty on each page load as required by the exercise.
