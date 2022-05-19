const themeChange = document.querySelector('header img');
let selectionIcon = document.querySelectorAll('.icon-select');
const filters = document.querySelectorAll('.button-filter');
const buttonAllTodos = document.querySelector('.all-todos');
const buttonActiveTodos = document.querySelector('.active-todos');
const buttonCompletedTodos = document.querySelector('.completed-todos');
const newTodoInput = document.querySelector('.new-todo-input');
const addedTodos = document.querySelector('.added-todos');
let theme = true; //true if theme is dark, false otherwise

themeChange.addEventListener('click', ()=>{
    document.body.classList.toggle('body-light');

    if(theme){
        themeChange.src = './images/icon-moon.svg';
        theme = false;
    }
    else{
        themeChange.src = './images/icon-sun.svg';
        theme = true;
    }
}); //Change the theme to light or dark



let showAll = true;
let showActive = false;
let showCompleted = false;

filters.forEach(filter =>{
    filter.addEventListener('click', (e)=>{
        if(e.target.classList.contains('all-todos')){
            showAll = !showAll;
            if(showAll){
                filter.classList.add('filter-selected');
                buttonActiveTodos.classList.remove('filter-selected');
                buttonCompletedTodos.classList.remove('filter-selected');
            }
            
        }
        else if(e.target.classList.contains('active-todos')){
            showActive = !showActive;
            if(showActive){
                filter.classList.add('filter-selected');
                buttonAllTodos.classList.remove('filter-selected');
                buttonCompletedTodos.classList.remove('filter-selected');
            }
            else{
                buttonAllTodos.classList.add('filter-selected');
                buttonCompletedTodos.classList.remove('filter-selected');
                filter.classList.remove('filter-selected');
        }
            
        }
        else if(e.target.classList.contains('completed-todos')){
            showCompleted = !showCompleted;
            if(showCompleted){
                filter.classList.add('filter-selected');
                buttonActiveTodos.classList.remove('filter-selected');
                buttonAllTodos.classList.remove('filter-selected');
            }
            else{
                buttonAllTodos.classList.add('filter-selected');
                buttonCompletedTodos.classList.remove('filter-selected');
                filter.classList.remove('filter-selected');
        }
    };
})}); // Filter the todos to be showed

newTodoInput.addEventListener('blur', ()=>{
    let newTodoText = newTodoInput.value;
    if(newTodoText !== null){
        addedTodos.append(createNewTodo(newTodoText));
    }
});

function createNewTodo(text){
    let li = document.createElement('li');
    let iconSelect = document.createElement('span');
    iconSelect.classList.add('icon-select');
    let textTodo = document.createElement('span');
    textTodo.classList.add('todo-text');
    textTodo.innerText = text;
    let removeTodoIcon = document.createElement('img');
    removeTodoIcon.src = './images/icon-cross.svg';
    li.append(iconSelect, textTodo, removeTodoIcon);
    selectionIcon = document.querySelectorAll('.icon-select');
    return li;
}

selectionIcon.forEach(selection => selection.addEventListener('click', ()=>{
    selection.classList.toggle('selected-icon');
    if(selection.classList.contains('selected-icon')){

    }
})); //Toggle the selection icon

//<li><span class="icon-select"></span><span class="todo-text">Todo Test</span><img src="./images/icon-cross.svg" alt="Remove the current todo"></li>