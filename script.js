// script.js

// Get references to HTML elements
var addTaskButton = document.getElementById('addTaskButton');
var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    var taskText = taskInput.value.trim(); // Remove extra spaces

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item (li)
    var li = document.createElement('li');

    // Create a span to hold the task text
    var span = document.createElement('span');
    span.textContent = taskText;

    // Add click event to toggle 'completed' class
    span.onclick = function() {
        li.classList.toggle('completed');
    };

    // Create a delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-button';

    // Add click event to delete the task
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Append the span and delete button to the list item
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Add click event to the "Add Task" button
addTaskButton.onclick = addTask;

// Optional: Add task when Enter key is pressed
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
