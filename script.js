function submitForm() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const mobileNumber = document.getElementById('mobileNumber').value;
  const email = document.getElementById('email').value;
  const birthdate = document.getElementById('birthdate').value;
  const address = document.getElementById('address').value;

  // Store the name in local storage
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);

  // Redirect to home page
  window.location.href = 'index.html';
}

// On the home page, retrieve the name from local storage and display it
document.addEventListener('DOMContentLoaded', function() {
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const fullName = `${firstName} ${lastName}`;
  
  // Display the name on the home page
  document.getElementById('patientName').innerText = fullName;
});
 // script.js
function setAlarm(inputId, medicineName) {
  const timeInput = document.getElementById(inputId);
  const alarmTime = timeInput.value;

  if (!alarmTime) {
    alert("Please select a time for the alarm.");
    return;
  }

  const [hours, minutes] = alarmTime.split(":");
  const now = new Date();
  const alarmDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    parseInt(hours),
    parseInt(minutes),
    0,
    0
  );

  const timeDiff = alarmDate - now;
  if (timeDiff < 0) {
    alert("Please select a future time for the alarm.");
    return;
  }

  setTimeout(() => {
    alert(`Time to take your ${medicineName}!`);
    showNotification(`Time to take your ${medicineName}!`);
  }, timeDiff);
}

function showNotification(message) {
  if ('Notification' in window) {
    Notification.requestPermission().then(function(permission) {
      if (permission === 'granted') {
        var notification = new Notification('Medicine Alert', {
          body: message
        });
      }
    });
  }
}

function updateStatus(medicineName, taken) {
  const medicineItem = document.getElementById(`medicine${medicineName}`);
  const status = taken ? '✓' : '';
  medicineItem.querySelector('label').textContent = `Taken ${status}`;
}
