// Retrieve the todo list from localStorage or initialize an empty array if not found
let todoArr = JSON.parse(localStorage.getItem("todo")) || [];

// If there are existing tasks, display the border and the tasks
if (todoArr.length > 0) {
  document.querySelector("#border").style.display = "block";
  displayData(todoArr);
}

// Add event listener to the button to add a new task
document.querySelector("input[type='button']").addEventListener("click", () => {
  document.querySelector("#border").style.display = "block";
  const taskName = document.querySelector("#task").value.trim();

  // Check if the task name is empty or just spaces
  if (taskName === " " || taskName === "") {
    alert("Enter the task");
    return;
  }

  // Create a new task object
  let task = {
    id: todoArr.length + 1,
    name: taskName,
    status: false,
  };

  // Add the new task to the array and update localStorage
  todoArr.push(task);
  localStorage.setItem("todo", JSON.stringify(todoArr));

  // Display the updated list of tasks
  displayData(todoArr);
});

// Function to display the list of tasks
function displayData(arr) {
  document.querySelector("ul").innerHTML = "";
  arr.forEach((elem) => {
    // Check the status of the task and apply text decoration if completed
    if (elem.status) {
      document.querySelector("ul").innerHTML += `
        <li id="${elem.id}" style="text-decoration: line-through;">${elem.name} <span><i class="fa-solid fa-square-check"></i> <i class="fa-solid fa-trash"></i></span></li>
      `;
    } else {
      document.querySelector("ul").innerHTML += `
        <li id="${elem.id}">${elem.name} <span><i class="fa-solid fa-square-check"></i> <i class="fa-solid fa-trash"></i></span></li>
      `;
    }
  });
}

// Add event listener to the list for marking tasks as completed or deleting them
document.querySelector("ul").addEventListener("click", (event) => {
  const listItem = event.target.closest("li");
  const taskIdx = +listItem.id;

  // Mark the task as completed
  if (event.target.classList.contains("fa-square-check")) {
    listItem.style.textDecoration = "line-through";
    let selectedTask = todoArr.find((elem) => elem.id === taskIdx);
    selectedTask.status = true;
    localStorage.setItem("todo", JSON.stringify(todoArr));
    displayData(todoArr);
  }

  // Delete the task from the list
  if (event.target.classList.contains("fa-trash")) {
    todoArr = todoArr.filter((elem) => elem.id !== taskIdx);
    localStorage.setItem("todo", JSON.stringify(todoArr));
    displayData(todoArr);
  }
});
