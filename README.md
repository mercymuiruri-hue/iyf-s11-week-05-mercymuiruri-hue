# Week 5: DOM Manipulation - Interactive To-Do List

## Author
- **Name:** Mercy Muiruri
- **GitHub:** [@MercyMuiruri-hue](https://github.com/MercyMuiruri-hue)
- **Date:** July 22, 2026

## Project Description
An interactive, fully functional web-based To-Do List application created for Week 5 DOM Manipulation coursework. The application allows users to dynamically create, manage, filter, and edit tasks, demonstrating core web developer skills in selecting elements, handling DOM events, traversing node trees, and performing dynamic updates.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Git & GitHub

## Features
- **Add Tasks:** Create tasks via input field or Enter key (prevents empty entries).
- **Toggle Complete:** Click task text to mark complete with custom strikethrough styling.
- **Delete Tasks:** Remove individual tasks using the delete button (`×`).
- **Filter Tasks:** Filter active view by "All", "Active", and "Completed" states.
- **Real-Time Stats & Batch Actions:** Displays remaining task count and includes a "Clear Completed" action.
- **In-Line Editing (Bonus):** Double-click any task to enter inline edit mode (Press `Enter` to save, `Escape` to cancel).

## How to Run
1. Clone this repository
2. Open `index.html` in your browser

## Lessons Learned
- Efficient event handling using event delegation on parent elements (`<ul>`).
- Dynamic DOM element creation and manipulation using `createElement`, `appendChild`, and `replaceChild`.
- State-driven UI rendering where DOM state synchronizes with a central JavaScript data array.

## Challenges Faced
- **Challenge:** Handling inline editing cleanly without breaking event listeners.
- **Solution:** Swapped out the task text node with an input element dynamically on double-click, binding temporary keydown listeners for `Enter` and `Escape` before re-rendering the updated list.
