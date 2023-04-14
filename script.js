function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Simulate a click on the first tab button when the page loads
document.getElementById("defaultOpen").click();

//drag ellements in workspace 
const workspace = document.querySelector('.workspace');
let dragElement = null;

workspace.addEventListener('dragstart', (event) => {
  dragElement = event.target;
});

workspace.addEventListener('dragover', (event) => {
  event.preventDefault(); // allow drop by preventing default behavior
});

workspace.addEventListener('drop', (event) => {
  event.preventDefault(); // allow drop by preventing default behavior
  const dropPositionX = event.clientX - workspace.offsetLeft;
  const dropPositionY = event.clientY - workspace.offsetTop;
  dragElement.style.left = `${dropPositionX}px`;
  dragElement.style.top = `${dropPositionY}px`;
  dragElement = null;
});

// darkmode switch
const darkmodeCheckbox = document.getElementById('darkmode');
const workspaceElement = document.getElementById('workspace');

darkmodeCheckbox.addEventListener('change', function() {
  if (darkmodeCheckbox.checked) {
    workspaceElement.style.backgroundColor = 'white';
  } else {
    workspaceElement.style.backgroundColor = '#171717';
  }
});

// Add H1 Element
const addH6Button = document.getElementById('addH1');

addH6Button.addEventListener('click', () => {
  const h1Element = document.createElement('h1');
  h1Element.innerText = 'Heading 1';
  h1Element.classList.add('element');
  h1Element.setAttribute('draggable', 'true');
  workspace.appendChild(h1Element);
});

// Add Paragraph
const addPButton = document.getElementById('addP');

addPButton.addEventListener('click', () => {
  const PElement = document.createElement('p');
  PElement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis scelerisque felis. Sed eu erat cursus, vehicula neque nec, suscipit erat. Phasellus eget porta ante. Proin interdum odio ut viverra dignissim.';
  PElement.classList.add('element');
  PElement.classList.add('new-p');
  PElement.setAttribute('draggable', 'true');
  workspace.appendChild(PElement);
});

// Add Input
const addInputButton = document.getElementById('addInput');

addInputButton.addEventListener('click', () => {
  const InputElement = document.createElement('input');
  InputElement.innerText = 'input';
  InputElement.classList.add('element');
  InputElement.setAttribute('draggable', 'true');
  workspace.appendChild(InputElement);
});

// Add Textarea Element
const addTextareaButton = document.getElementById('addTextarea');

addTextareaButton.addEventListener('click', () => {
  const TextareaElement = document.createElement('textarea');
  TextareaElement.innerText = 'textarea';
  TextareaElement.classList.add('element');
  TextareaElement.setAttribute('draggable', 'true');
  workspace.appendChild(TextareaElement);
});