//const colecctionItems = document.querySelector(".item");
const todoList = document.querySelector("#todo-list");
const items = todoList.children;
const button = document.querySelector("#submit");
const todoNr = document.querySelector(".todo-nr b");
const nameInput = document.querySelector(".name-input");

button.addEventListener("click", function(e){
    e.preventDefault();
    const newItem = document.createElement("li");
    newItem.classList.add("Item");
    newItem.innerText = nameInput.value+(items.length+1);
    todoList.appendChild(newItem);
    todoNr.innerText = items.length;
    //Creacion de el elemento y listener
    newItem.addEventListener("click", deleteItem);
    nameInput.value = "";
});

function deleteItem(event){
    event.stopPropagation();
    event.target.remove();
}

todoList.addEventListener("click", function(){
    todoList.classList.toogle("fade");
});