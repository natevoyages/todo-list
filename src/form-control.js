import {createToDo, createProject} from "./create-objects";
import { createToDoElement, clearData, createProjectelement, clearProjName } from "./dom-controls";
import { projects} from "./todo-objects";


function openForm(){
   let content = document.getElementById("pop-up-module");
   content.style.display = "flex";
}

function openProjectForm(){
    let addProject = document.getElementById("project-input");
    addProject.style.display = "flex";
    let btn =document.getElementById("add-project");
    btn.style.display = "none";
}

function closeForm(){
    let content = document.getElementById("pop-up-module");
    content.style.display = "none";
    clearData();
}

function closeProjectForm(){
    let addProject = document.getElementById("project-input");
    addProject.style.display = "none";
    let btn =document.getElementById("add-project");
    btn.style.display = "inline";
    clearProjName();
}
// fix this
function submitForm(todos){
    todos.push(createToDo(todos));
    createToDoElement(todos);
    console.log(todos);
    closeForm();
}

function submitProject(){
    projects.push(createProject());
    createProjectelement();
    closeProjectForm();
    clearProjName();
}



export {openForm, closeForm, submitForm, openProjectForm, submitProject, closeProjectForm};
