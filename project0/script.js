const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


function newTodo() {
  //get task description
  let description = prompt('Enter the TODO description', 'newTodo')
  if (description === null) {
    return;
  }

  increaseCount()

  updateDocument(description)

  //succes
  alert('New TODO created successfully!')
}

//Adds the new item to the document (HTML)
function updateDocument(description) {
  let node = buildListItem()
    node.appendChild(buildCheckbox())
    node.appendChild(buildDescription(description))
    node.appendChild(buildButton())
  list.appendChild(node)
}

//HTML elements builders 
function buildListItem() {
  let node = document.createElement("li")
    node.style.backgroundColor = '#FF5722'
    node.className = classNames.TODO_ITEM
  return node
}

function buildCheckbox() {
  let checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.className = classNames.TODO_CHECKBOX
    checkbox.addEventListener('click', function() {handleCheck(this)})
    return checkbox
}

function buildDescription(description) {
  let textnode = document.createTextNode(description)
    textnode.className = classNames.TODO_TEXT
  return textnode
}

function buildButton() {
  let button = document.createElement('button')
    button.className = classNames.TODO_DELETE
    button.textContent = 'Delete'
    button.addEventListener('click', function() {handleDelete(this)})
  return button
}

//Counters controllers
function increaseCount() {
  let itemCount = parseInt(itemCountSpan.innerHTML)
  itemCountSpan.innerHTML = itemCount + 1
  increaseUnchecked()
}

function decreaseCount() {
  let itemCount = parseInt(itemCountSpan.innerHTML)
  itemCountSpan.innerHTML = itemCount - 1
}

function increaseUnchecked() {
    //update counters
    let uncheckedCount = parseInt(uncheckedCountSpan.innerHTML)
    uncheckedCountSpan.innerHTML = uncheckedCount + 1
}

function decreaseUnchecked() {
  let uncheckedCount = parseInt(uncheckedCountSpan.innerHTML)
  uncheckedCountSpan.innerHTML = uncheckedCount - 1
}

//Events handlers
function handleCheck(e) {
  if (e.checked) {
    e.parentElement.style.backgroundColor = '#4CAF50'
    decreaseUnchecked()
  } else {
    e.parentElement.style.backgroundColor = '#FF5722'
    increaseUnchecked()
  }
}

function handleDelete(e) {
  if (!e.parentElement.getElementsByClassName(classNames.TODO_CHECKBOX).item(0).checked) {
    decreaseUnchecked()
  }
  decreaseCount()
  //hide the whole list item
  e.parentElement.style.display = 'none'
}
