
const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todoList");
const searchInput = document.getElementById("searchInput");

const cityInput = document.getElementById("cityInput");
const weatherBtn = document.getElementById("weatherBtn");
const weatherResult = document.getElementById("weatherResult");


// Store Tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// Display Tasks
function displayTasks(taskArray){

  todoList.innerHTML = "";

  taskArray.map((task)=>{

    const taskDiv = document.createElement("div");

    taskDiv.classList.add("task");

    taskDiv.innerHTML = `
      <span>${task.name}</span>

      <button
        class="delete-btn"
        onclick="deleteTask(${task.id})"
      >
        Delete
      </button>
    `;

    todoList.appendChild(taskDiv);

  });

}



function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}



todoForm.addEventListener("submit",(event)=>{

  event.preventDefault();

  const newTask = {
    id: Date.now(),
    name: taskInput.value
  };

  tasks.push(newTask);

  saveTasks();

  displayTasks(tasks);

  todoForm.reset();

});



function deleteTask(id){

  tasks = tasks.filter((task)=>{
    return task.id !== id;
  });

  saveTasks();

  displayTasks(tasks);

}



// Filter Tasks

searchInput.addEventListener("keyup", () => {

  const text = searchInput.value.toLowerCase();

  const filteredTasks = tasks.filter((task) => {
    return task.name.toLowerCase().includes(text);
  });

  
  todoList.innerHTML = "";

  
  if(filteredTasks.length > 0){

    displayTasks(filteredTasks);

  }

  
  else{

    todoList.innerHTML = `
      <h3>Task Not Found</h3>
    `;

  }

});






displayTasks(tasks);