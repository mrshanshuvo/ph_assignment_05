document.addEventListener("DOMContentLoaded", function () {
  const taskAssignedElement = document.getElementById("task-assigned");
  const taskDoneElement = document.getElementById("task-done");
  const activityLog = document.getElementById("activity-log");
  const clearHistoryBtn = document.getElementById("clear-history");

  // Function to Add to Activity Log
  function addToActivityLog(taskTitle) {
    const time = new Date().toLocaleTimeString();
    const logEntry = document.createElement("p");
    logEntry.className = "text-gray-600 text-sm";
    logEntry.textContent = `You have completed the task "${taskTitle}" at ${time}`;
    activityLog.appendChild(logEntry);
  }

  // Function to Clear Activity Log
  clearHistoryBtn.addEventListener("click", () => {
    activityLog.innerHTML = "";
  });

  // Completed Button Click Event for all buttons
  const completedButtons = document.querySelectorAll(".completed-btn");

  completedButtons.forEach((completedButton) => {
    completedButton.addEventListener("click", function () {
      let taskAssigned = parseInt(taskAssignedElement.textContent);
      let taskDone = parseInt(taskDoneElement.textContent);

      if (taskAssigned > 0) {
        taskAssignedElement.textContent = taskAssigned - 1;
        taskDoneElement.textContent = taskDone + 1;
        alert("Board updated successfully");

        // Fetch the task title from the current card (button's parent)
        const taskTitleElement = completedButton
          .closest(".flex.flex-col")
          .querySelector(".task-title");

        if (taskTitleElement && !completedButton.disabled) {
          addToActivityLog(taskTitleElement.textContent);
        }

        // Disable the button after clicking
        completedButton.disabled = true;
        completedButton.classList.add("opacity-50", "cursor-not-allowed");
      } else {
        alert("No tasks left to complete.");
      }
    });
  });
});
