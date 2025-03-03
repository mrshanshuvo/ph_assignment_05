document.addEventListener("DOMContentLoaded", function () {
  const completedButton = document.getElementById("completed-btn");
  const taskAssignedElement = document.getElementById("task-assigned");
  const taskDoneElement = document.getElementById("task-done");
  const activityLog = document.getElementById("activity-log");
  const clearHistoryBtn = document.getElementById("clear-history");

  // Function to Add to Activity Log
  function addToActivityLog(taskTitle) {
    const time = new Date().toLocaleTimeString();
    activityLog.innerHTML += `<p class="text-gray-600 text-sm">You have completed the task "${taskTitle}" at ${time}</p>`;
  }

  // Function to Clear Activity Log
  clearHistoryBtn.addEventListener("click", () => {
    activityLog.innerHTML = "";
  });

  // Completed Button Click Event
  completedButton.addEventListener("click", function () {
    let taskAssigned = parseInt(taskAssignedElement.textContent);
    let taskDone = parseInt(taskDoneElement.textContent);

    if (taskAssigned > 0) {
      taskAssignedElement.textContent = taskAssigned - 1;
      taskDoneElement.textContent = taskDone + 1;
      alert("Board updated successfully");

      const taskTitleElement = document.querySelector(
        ".grid .text-xl.font-medium"
      );
      if (taskTitleElement) {
        addToActivityLog(taskTitleElement.textContent);
      }
    } else {
      alert("No tasks left to complete.");
    }
  });
});
