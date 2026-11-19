# JavaScript DOM Mini Project — To-Do List

## How to run

1. Download and unzip the project.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Double-click `index.html` to open in Chrome. No server or installation needed.
4. Enter a task and press **Submit** or **Enter**.
5. Tick a checkbox to cross out the task in red; click the X to delete it.

**Offline use:** Everything works offline. Font Awesome icons require a network connection, so a regular × character is shown automatically when offline.

## Assignment checklist

- Separate HTML, CSS, JS files.
- HTML form with text input and Submit button.
- Empty `<div class="listTasks"></div>` at startup.
- `const tasks = []` and `addTask()` function with empty-string validation.
- Task rows built with DOM methods: X button, checkbox, associated label.
- Bonus I: `{ task_id, text, done }` objects; IDs from 0; `data-task-id` on each row; `doneTask()` updates the object and DOM.
- Bonus II: `deleteTask()` removes one task by ID from the array and the DOM.
- `addEventListener()` used for submit, change, and click events.

No task data is saved after refresh because the assignment specifically begins with an empty array.
