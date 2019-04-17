const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const items = list.getElementsByTagName("li")
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

class TodoItem  {
  constructor(id, description) {
    this._id = id
    this.checked = false
    this.description = description
  }

  check() {
    if (!this.checked) {
      this.checked = true
      let unchecked = parseInt(uncheckedCountSpan.innerHTML)
      uncheckedCountSpan.innerHTML = unchecked - 1
    }
    
  }

  get id() {
    return this._id
  }
}

class TodoList {
  constructor() {
    this._todoList = {}
  }

  add(todo) {
    this._todoList[todo.id] = todo
  }

  get(id) {
    return this._todoList[id]
  }
}

const todoList = new TodoList



function newTodo() {
  //get description
  let description = prompt('Enter the TODO description', 'newTodo')
  if (description === null) {
    return;
  }
  //create new TodoItem
  let id = itemCountSpan.innerHTML
  todo = new TodoItem(id, description)
  //add it to the TodoList
  todoList.add(todo)
  updateDocument(todo)
  //succes
  alert('New TODO created successfully! ID: ' + todo.id)
}

function updateDocument(todo) {
    //update counters
  let itemCount = parseInt(todo.id)
  itemCountSpan.innerHTML = itemCount + 1
  let uncheckedCount = parseInt(uncheckedCountSpan.innerHTML)
  uncheckedCountSpan.innerHTML = uncheckedCount + 1
  //update list item in html
  let node = document.createElement("li")
  let checkbox = document.createElement('input')
    checkbox.type = "checkbox"
  let textnode = document.createTextNode(todo.description)
  node.appendChild(checkbox)
  node.appendChild(textnode)
  list.appendChild(node)
}


