// script.js


var addTaskButton = document.getElementById('addTaskButton');
var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');


function addTask() {
    var taskText = taskInput.value.trim(); // Remove extra spaces

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

 
    var li = document.createElement('li');

    
    var span = document.createElement('span');
    span.textContent = taskText;

    span.onclick = function() {
        li.classList.toggle('completed');
    };

   
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-button';

   
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };


    li.appendChild(span);
    li.appendChild(deleteBtn);


    taskList.appendChild(li);

 
    taskInput.value = '';
}


addTaskButton.onclick = addTask;


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
