// Navigate to Blog Page
document.querySelector('.go-to-QNA').addEventListener('click', () => {
  window.location.href = 'QNA.html';
});

//Display date
const today = new Date();
const day = today.toLocaleDateString('en-US', { weekday: 'short' });
const fullDate = today.toLocaleDateString('en-US', {
  month: 'short',
  day: '2-digit',
  year: 'numeric'
});
const dayElement = document.querySelector('.day');
const dateElement = document.querySelector('.date');
if (dayElement) {
  dayElement.textContent = day + ',';
}
if (dateElement) {
  dateElement.textContent = fullDate;
}


// Function to count active tasks
function active_task() {
  var total = 0; 

  var buttons = document.getElementsByClassName("btn");
  var cards = document.getElementsByClassName("card");

  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].disabled == false) {
      total = total + 1;
    }
  }

  if (buttons.length == cards.length) {
    return total;
  } else {
    console.log("Some cards don't have a button.");
    return false;
  }
}

// Initialize Total Tasks
let totalTask = active_task();

let taskElement = document.querySelector('.task');

if (totalTask < 10) {
  taskElement.textContent = '0' + totalTask;
} else {
  taskElement.textContent = totalTask;
}

// Handle Task Completion
let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {    
    alert('Board updated Successfully');
    button.disabled = true;
    button.style.backgroundColor = '#c5caeb';
    button.classList.remove('hover:bg-[#03179b]');
    totalTask--;
    if (totalTask === 0) {
      alert('Congrats!!You have completed all the current tasks');
    }
    let taskElement = document.querySelector('.task');
    taskElement.textContent = totalTask < 10 ? '0' + totalTask : totalTask;
    let doneTaskElement = document.querySelector('.done-task');
    let doneCount = parseInt(doneTaskElement.textContent); 
    doneCount++;
    doneTaskElement.textContent = doneCount;

    // Log Activity
    let activityBox = document.querySelector('.activity'); 
    let log = document.createElement('p'); 
    let taskName = button.parentElement.parentElement.children[1].textContent;
    let time = new Date().toLocaleTimeString();
    log.textContent = `You have completed the task "${taskName}" at ${time}`;
   log.style.backgroundColor = '#F4F7FF';
   log.style.padding = '10px';
   log.style.borderRadius = '8px';
  log.style.marginTop = '7px';
  activityBox.appendChild(log);
  });
});
// Clear history and reset everything
document.querySelector('.clear-btn').addEventListener('click', () => {
  
  // Clear the activity log
  let activityBox = document.querySelector('.activity');
  activityBox.innerHTML = '';

  let buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.disabled = false; 
    button.style.backgroundColor = ''; 
    button.classList.add('hover:bg-[#03179b]'); 
  });

  // Reset task count
  totalTask = document.querySelectorAll('.btn').length; 
  let taskElement = document.querySelector('.task');
  taskElement.textContent = totalTask < 10 ? '0' + totalTask : totalTask;

  let doneElement = document.querySelector('.done-task');
  doneElement.textContent = '0';
});



