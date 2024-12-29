// script.js

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Function to add a new task
  const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    const taskItem = document.createElement("li");

    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      taskItem.style.animation = "fadeOut 0.3s ease-out";
      setTimeout(() => {
        taskList.removeChild(taskItem);
      }, 300);
    });

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = ""; // Clear the input field
  };

  addTaskBtn.addEventListener("click", addTask);

  // Allow pressing Enter to add tasks
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
  });
});


