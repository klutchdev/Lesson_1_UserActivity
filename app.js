// Input elements
const submitButton = document.getElementById('submit-button');
const weapon = document.getElementById('weapon');
const food = document.getElementById('food');


// Text content elements
const currentStatus = document.getElementById('current-status');
const weaponText = document.getElementById('weapon-text');
const foodText = document.getElementById('food-text');


// Status update elements
const inActive = ' 🔴 Idle ';
const active = ' 🟢 Active ';

// Initialize current status as inactive
currentStatus.textContent = inActive;



// Activate the status timer
const startTimer = (duration) => {

  let seconds = duration;

  setInterval(() => {

    seconds--;

    if (seconds == 0) currentStatus.textContent = inActive;
    if (seconds > 0) currentStatus.textContent = active;

  }, 1000);
}



// Update UI with input values
submitButton.onclick = () => {

  if (currentStatus.textContent === inActive) {
    
    currentStatus.textContent = active;
    startTimer(10);

  }

  weaponText.textContent = weapon.value;
  foodText.textContent = food.value;

  // Reset input fields
  weapon.value = '';
  food.value = '';

}



// Update status to active on keypress
document.onkeypress = () => {

  if (currentStatus.textContent === inActive) {
    
    currentStatus.textContent = active;
    startTimer(10);

  }
};


