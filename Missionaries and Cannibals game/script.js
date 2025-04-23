let boatSide = 'right';

let missionariesRight = 3;
let cannibalsRight = 3;
let missionariesLeft = 0;
let cannibalsLeft = 0;

function render() {
  document.getElementById('left-missionaries').textContent = '🧎'.repeat(missionariesLeft);
  document.getElementById('left-cannibals').textContent = '👹'.repeat(cannibalsLeft);
  document.getElementById('right-missionaries').textContent = '🧎'.repeat(missionariesRight);
  document.getElementById('right-cannibals').textContent = '👹'.repeat(cannibalsRight);

  const boat = document.getElementById('boat');
  boat.style.marginLeft = boatSide === 'left' ? '-80px' : '80px';
}

function move() {
  const m = parseInt(document.getElementById('missionaries').value) || 0;
  const c = parseInt(document.getElementById('cannibals').value) || 0;
  const total = m + c;

  if (total < 1 || total > 2) {
    showMessage('⛔ Invalid move. You must move 1 or 2 people.');
    return;
  }

  if (boatSide === 'right') {
    if (m > missionariesRight || c > cannibalsRight) {
      showMessage('⛔ Not enough people on the right side.');
      return;
    }
    missionariesRight -= m;
    cannibalsRight -= c;
    missionariesLeft += m;
    cannibalsLeft += c;
    boatSide = 'left';
  } else {
    if (m > missionariesLeft || c > cannibalsLeft) {
      showMessage('⛔ Not enough people on the left side.');
      return;
    }
    missionariesRight += m;
    cannibalsRight += c;
    missionariesLeft -= m;
    cannibalsLeft -= c;
    boatSide = 'right';
  }

  render();

  // Check for lose conditions
  if ((missionariesRight < cannibalsRight && missionariesRight > 0) ||
      (missionariesLeft < cannibalsLeft && missionariesLeft > 0)) {
    showMessage('💀 YOU LOSE! Cannibals ate the missionaries.');
    disableInputs();
    return;
  }

  // Check for win condition
  if (missionariesLeft === 3 && cannibalsLeft === 3) {
    showMessage('🎉 YOU WIN! Everyone crossed safely.');
    disableInputs();
    return;
  }

  showMessage('✅ Valid move. Keep going!');
}

function showMessage(msg) {
  document.getElementById('message').textContent = msg;
}

function disableInputs() {
  document.querySelector('button').disabled = true;
  document.querySelectorAll('input').forEach(input => input.disabled = true);
}

render();
function render() {
    document.getElementById('left-missionaries').textContent = '🧎'.repeat(missionariesLeft);
    document.getElementById('left-cannibals').textContent = '👹'.repeat(cannibalsLeft);
    document.getElementById('right-missionaries').textContent = '🧎'.repeat(missionariesRight);
    document.getElementById('right-cannibals').textContent = '👹'.repeat(cannibalsRight);
  
    const boat = document.getElementById('boat');
    boat.style.left = boatSide === 'left' ? '-80px' : '80px'; // smooth move
  }
  