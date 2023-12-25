// Declare Global Scope Variables
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

// Functions
const addItem = (e) => {
  e.preventDefault();
  // console.log('Submitted');

  // Get Input Value
  const newItem = itemInput.value;

  // Validation
  if(newItem === ''){
    alert('Enter a valid item');
    return
  };

  // Create List Item
  const listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(newItem));

  const button = createBtn('remove-item btn-link text-red');
  listItem.appendChild(button);

  itemList.appendChild(listItem);

  itemInput.value = ''
}

// Create Button
const createBtn = (classes) => {
  const btn = document.createElement('button');
  btn.className = classes;
  btn.appendChild(createIcon('fa-solid fa-xmark'));
  return btn;
};

// Create Icon
const createIcon = (classes) => {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

// Event Listeners
itemForm.addEventListener('submit', addItem);