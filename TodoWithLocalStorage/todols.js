let todoForm = document.querySelector('.todo-form');
let todoInput = document.querySelector('.todo-input');
let todoItemsList = document.querySelector('.todo-items');

let todos = [];

// add object in todo
// {
    // id: Date.now()
    // name: "Buy a chocolate"
    // completed: false
//}

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo(todoInput.value);
});

function addTodo(item){
    if(item !== ''){
        let todo = {
            id: Date.now(),
            task: item,
            completed: false,
        }
        todos.push(todo);
        addToLocalStorage(todos);
        todoInput.value = '';
    }
}
//==================checkbox pe click krte hi -> strikethrough ==================


// renderTodos -> 5 min
function renderTodos(todos){
    todoItemsList.innerHTML = '';
    todos.forEach(function(item){
        let isCompleted = item.completed ? 'checked' : null;
        let liItem = document.createElement('li');
        // khud kro
        liItem.setAttribute('class', 'item');
        liItem.setAttribute('data-key', item.id);
        if(item.completed === true){
            liItem.classList.add('checked');
        }
        liItem.innerHTML = `<input type="checkbox" class="checkbox" ${isCompleted}> ${item.task}
        <button class="delete-buton">X</button>`
        todoItemsList.appendChild(liItem);
    });
}

// local storage
// key value pairs
function addToLocalStorage(todos){
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
}

function getFromLocalStorage(){
    let storedTodos = localStorage.getItem('todos');
    if(storedTodos){
       todos = JSON.parse(storedTodos);
        renderTodos(todos);
    }
}

getFromLocalStorage();

// homework ===================
function toggle(id){
    console.log(id);
    console.log(todos);
    todos.forEach(function(item){
        if(item.id == id){
            item.completed = !item.completed;
        }
    });
    addToLocalStorage(todos);
}

// delete and checkbox ==========
todoItemsList.addEventListener('click', function(e){
    // event is for checkbox
    if(e.target.type === 'checkbox'){
        toggle(e.target.parentElement.getAttribute('data-key'));
    }
})

// delete =========================

