const themeChange = document.querySelector('header img');
const selectionIcon = document.querySelectorAll('.icon-select');
const filters = document.querySelectorAll('.button-filter');
const buttonAllTodos = document.querySelector('.all-todos');
const buttonActiveTodos = document.querySelector('.active-todos');
const buttonCompletedTodos = document.querySelector('.completed-todos');
const newTodoInput = document.querySelector('.new-todo-input');
const addedTodos = document.querySelector('.added-todos');
const itensLeft = document.querySelector('.items-left');
let theme = true; //true if theme is dark, false otherwise
let showAll = true;
let showActive = false;
let showCompleted = false;


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
    if(newTodoText !== '' && newTodoText !== null){
        addedTodos.append(createNewTodo(newTodoText));
        newTodoInput.value = '';
        addedTodos = document.querySelector('.added-todos');
    }
}); //Add the new todo to the list
newTodoInput.addEventListener('keydown', (e)=>{
    let newTodoText = newTodoInput.value;
    if(newTodoText !== '' && newTodoText !== null && e.key == 'Enter'){
        addedTodos.append(createNewTodo(newTodoText));
        newTodoInput.value = '';
        addedTodos = document.querySelector('.added-todos');
    }
}); //Add the new todo to the list

function createNewTodo(text){
    let li = document.createElement('li');
    let iconSelect = document.createElement('input');
    iconSelect.classList.add('icon-select');
    iconSelect.type = 'checkbox';
    let textTodo = document.createElement('span');
    textTodo.classList.add('todo-text');
    textTodo.innerText = text;
    let removeTodoIcon = document.createElement('img');
    removeTodoIcon.src = './images/icon-cross.svg';
    li.append(iconSelect, textTodo, removeTodoIcon);
    return li;
} //Create a new todo





