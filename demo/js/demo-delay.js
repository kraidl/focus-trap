var createFocusTrap = require('../../');

var containerNine = document.getElementById('demo-delay');

var focusTrapNine = createFocusTrap(containerNine);

document.getElementById('activate-delay').addEventListener('click', showContainer);
document.getElementById('activate-delay').addEventListener('keydown', showContainer);
document.getElementById('close-button-delay').addEventListener('click', hideContainer);

function showContainer() {
  containerNine.style.opacity = '1';
  focusTrapNine.activate();
}

function hideContainer() {
  containerNine.style.opacity = '0.2';
  focusTrapNine.deactivate();
}
