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


