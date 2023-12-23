// Global scope variables
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

const addItem = (e) => {
  e.preventDefault();

  // Validate Input
  let newItem = itemInput.value;
  if(newItem === ""){
    alert('Please Enter Valid Input!!!')
    return
  }

  // Create List Items
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createBtn('remove-item btn-link text-red')
  li.appendChild(button);

  itemList.appendChild(li);

  // Setting the input value to empty string
  itemInput.value = ''

}

// Create Button
function createBtn(classes){
  const button = document.createElement('button');
  button.className = classes;
  button.appendChild(createIcon("fas fa-times"))
  return button
}

// Create Icon
function createIcon(classes){
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}


// Event Listeners
itemForm.addEventListener('submit', addItem)