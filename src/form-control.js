import createToDo from "./create-todo";
import { todos } from "./todos";

createToDo
function openForm(){
   let content = document.getElementById("pop-up-module");
   content.style.display = "flex";
}

function closeForm(){
    let content = document.getElementById("pop-up-module");
    content.style.display = "none";
}

function submitForm(){
    closeForm();
    todos.push(createToDo());
    console.log(todos);
}


export {openForm, closeForm, submitForm};
