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



document.getElementById('newTask').addEventListener('click', (event) =>{
    
    event.preventDefault();
    let table = document.getElementById('tasks');
    let insertTasks = document.getElementById("insertTask");
    let input = taskForm.querySelector("input");
    
    if(input.value.trim() ===""){
        insertTasks.textContent = "Please enter task!";
    } else {

let row = table.insertRow(1);
row.insertCell(0).innerHTML = document.getElementById("taskInput").value;

document.getElementById('taskInput').value = "";
    }
});



