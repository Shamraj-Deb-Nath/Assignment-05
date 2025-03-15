// Navigate to the QNA page
document.querySelector('.go-to-QNA').addEventListener('click', () => {
    window.location.href = 'QNA.html';
});

// // Display Date
let today = new Date();

  let day = today.toLocaleDateString('en-US', { weekday: 'short' });
  let fullDate = today.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  document.querySelector('.day').textContent = day + ','; 
  document.querySelector('.date').textContent = fullDate; 


