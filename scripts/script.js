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
        if (taskAssigned == 1) {
          alert("Congrats !! You have completed all the current tasks.");
        }

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
        completedButton.classList.remove("cursor-pointer");
      } else {
        alert("No tasks left to complete.");
      }
    });
  });
});

// current date
const currentDate = new Date();

// day of the week
const dayOfWeek = currentDate.toLocaleString("en-US", { weekday: "short" });

const formattedDate = currentDate.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

document.getElementById("day-of-week").textContent = dayOfWeek + " ,";
document.getElementById("current-date").textContent = formattedDate;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColorRandomly() {
  const body = document.body;

  body.style.backgroundColor = getRandomColor();
}
