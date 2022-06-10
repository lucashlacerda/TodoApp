const themeChange = document.querySelector('.header__theme-change');
const selectionIcon = document.querySelectorAll('.new-todo__icon-select');
const filters = document.querySelectorAll('.filter__button');
const buttonAllTodos = document.querySelector('.filter__all');
const buttonActiveTodos = document.querySelector('.filter__active');
const buttonCompletedTodos = document.querySelector('.filter__completed');
const newTodoInput = document.querySelector('.new-todo__input');
let addedTodos = document.querySelector('.todos');
const itensLeft = document.querySelector('.status__items-left');
const clearAll = document.querySelector('.status__clear-todos');
let todoItems = document.querySelectorAll('.todos__added');
let theme = true; //true if theme is dark, false otherwise
let showAll = true;
let showActive = false;
let showCompleted = false;


themeChange.addEventListener('click', ()=>{
    document.body.classList.toggle('body--light');

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
        if(e.target.classList.contains('filter__all')){
            showAll = !showAll;
            if(showAll){
                filter.classList.add('filter--selected');
                buttonActiveTodos.classList.remove('filter--selected');
                buttonCompletedTodos.classList.remove('filter--selected');
            } 
        } //Show all todos
        else if(e.target.classList.contains('filter__active')){
            showActive = !showActive;
            if(showActive){
                filter.classList.add('filter--selected');
                buttonAllTodos.classList.remove('filter--selected');
                buttonCompletedTodos.classList.remove('filter--selected');
            }
            else{
                buttonAllTodos.classList.add('filter--selected');
                buttonCompletedTodos.classList.remove('filter--selected');
                filter.classList.remove('filter--selected');
        }
        } //Show active todos
        else if(e.target.classList.contains('filter__completed')){
            showCompleted = !showCompleted;
            if(showCompleted){
                filter.classList.add('filter--selected');
                buttonActiveTodos.classList.remove('filter--selected');
                buttonAllTodos.classList.remove('filter--selected');
            }
            else{
                buttonAllTodos.classList.add('filter--selected');
                // buttonActiveTodos.classList.remove('filter--selected');
                filter.classList.remove('filter--selected');
        }
    } //Show active todos
})}); // Filter the todos to be showed

newTodoInput.addEventListener('blur', ()=>{
    let newTodoText = newTodoInput.value;
    if(newTodoText !== '' && newTodoText !== null){
        addedTodos.append(createNewTodo(newTodoText));
        newTodoInput.value = '';
        addedTodos = document.querySelector('.todos');
        todoItems = document.querySelectorAll('.todos__added');
    }
}); //Add the new todo to the list
newTodoInput.addEventListener('keydown', (e)=>{
    let newTodoText = newTodoInput.value;
    if(newTodoText !== '' && newTodoText !== null && e.key == 'Enter'){
        addedTodos.append(createNewTodo(newTodoText));
        newTodoInput.value = '';
        addedTodos = document.querySelector('.todos');
        todoItems = document.querySelectorAll('.todos__added');
    }
}); //Add the new todo to the list

function createNewTodo(text){
    let li = document.createElement('li');
    li.classList.add('todos__added');
    let iconSelect = document.createElement('input');
    iconSelect.classList.add('todos-added__icon-select');
    iconSelect.type = 'checkbox';
    let textTodo = document.createElement('span');
    textTodo.classList.add('todos-added__text');
    textTodo.innerText = text;
    let removeTodoIcon = document.createElement('img');
    removeTodoIcon.src = './images/icon-cross.svg';
    removeTodoIcon.classList.add('todos-added__icon-remove');
    li.append(iconSelect, textTodo, removeTodoIcon);
    return li;
} //Create a new todo

clearAll.addEventListener('click', () => {
    todoItems.forEach(todoItem => todoItem.remove());

})