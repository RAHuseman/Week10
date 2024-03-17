// let taskForm = document.getElementById("taskform");
// let tasks = document.getElementById("tasks");
// let taskArray = []; // Start taskArray

// taskForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let input = taskForm.querySelector("input");

//     if (input.value.trim() === "") {
//         tasks.textContent = "Please enter task!";
//     } else {
//         taskArray.push(input.value); // Push the value of input, not the input itself
//         let taskString = "";
//         for (let i = 0; i < taskArray.length; i++) {
//             taskString += (i + 1) + ". " + taskArray[i] + "\n"; // Add task with index
//         }
//         tasks.textContent = taskString; // Update tasks element with taskString
//         console.log(taskArray);
//     } 
// This wasn't fittiing the requirements of the assignment. 
// });

document.getElementById('newTask').addEventListener('click', (event) =>{// adding an event listener for a mouse click 
    //for the button with id newTask
    
    event.preventDefault(); // prevents from submitting and the page from refreshing
    let table = document.getElementById('tasks');
    let insertTasks = document.getElementById("insertTask");// assigning inserTasks to the div inserTask
    let input = taskForm.querySelector("input");//Selecting the input tag in the form
    
    if(input.value.trim() ===""){ // checking for input and if none then "Please enter task"
        insertTasks.textContent = "Please enter task!";
    } else {// if they did enter text in the input

    let row = table.insertRow(1);// variable row = inserting a new row
row.insertCell(0).innerHTML = document.getElementById("taskInput").value;// assinging the data to the first cell in the row

document.getElementById('taskInput').value = ""; // Value of taskInput which is the task inserted
    }
});



