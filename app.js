const newTaskForm = document.querySelector('#form');
const toDoTable = document.querySelector('#incomplete-tasks');
const completeTable = document.querySelector('#complete-tasks');
const taskInput = document.querySelector('#task');
const dueDateInput = document.querySelector('#due-date');
const toDoTableBody = toDoTable.querySelector('tbody');
const completeTableBody = completeTable.querySelector('tbody');

// Add new tasks to To-Do List table

newTaskForm.addEventListener('submit', (event) => {

    event.preventDefault();
    const newTask = taskInput.value;
    const newDueDate = dueDateInput.value;
    
    if(newTask == "") {return}

    toDoTableBody.innerHTML += `
        <tr>
            <td>${newTask}</td>
            <td>${newDueDate}</td>
            <td><input type="checkbox" class="mark-complete"></td>
            <td><button class="delete-item">delete</button></td>
    `;

    newTaskForm.reset();
});

// Delete tasks from To-Do List table and move completed tasks to Completed table

toDoTable.addEventListener('click', (event) => {

    const clickedElement = event.target;

    deleteFromTable(clickedElement);
    moveByCompleteBtn(clickedElement, completeTableBody);

});

// Delete tasks from completed table and move completed tasks to To-Do List table

completeTable.addEventListener('click', (event) => {

    const clickedElement = event.target;
    
    deleteFromTable(clickedElement);
    moveByCompleteBtn(clickedElement, toDoTableBody);

});


function deleteFromTable(clickedElement) {

    if (clickedElement.classList.contains('delete-item')) {
        clickedElement.closest('tr').remove();
   }
};

function moveByCompleteBtn(clickedElement, moveToTableBody) {
 
     if (clickedElement.classList.contains('mark-complete')) {
         moveToTableBody.appendChild(clickedElement.closest('tr'));
     }
};