function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create elements
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  // Set values
  span.textContent = taskText;
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete-btn";

  // Delete task
  deleteBtn.onclick = function () {
    li.remove();
  };

  // Append elements
  li.appendChild(span);
  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  // Clear input
  input.value = "";
}
