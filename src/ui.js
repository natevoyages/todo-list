import { createProjectelement } from "./dom";
import { addProject } from "./projects";
import { clearData, addTask } from "./tasks";
import { todoList } from "./todolist";






let currentPage = todoList.projects.at(0);
let currentId = currentPage.id;




let i = 0;
function addInitialListeners(){
    addNavBarlisteners();
    let addTodoBtn = document.getElementById("add-todo")
    addTodoBtn.addEventListener('click', () =>{
         openForm();
         if (i== 0){
            i++;
         addFormListeners();
        }
    }
         );
}

function addFormListeners(){
  let submitBtn = document.querySelector(".form-submit");
  let closebtn = document.querySelector(".form-close-btn");


  closebtn.addEventListener('click', (event) => {event.preventDefault();
  closeForm();});
  submitBtn.addEventListener('click', (event) => {event.preventDefault();
  submitForm();}); 
  
}
function displayTodoList()
{
  console.log("Todo List");
  todoList.projects.forEach(proj => 
    console.log("name: " + proj.name + " tasks: " + proj.tasks))
}

function openProjectForm(){
  let addProject = document.getElementById("project-input");
  addProject.style.display = "flex";
  addProject.style.flexDirection = "column";
  let btn =document.getElementById("add-project");
  btn.style.display = "none";
}
function closeProjectForm(){
  let addProject = document.getElementById("project-input");
  addProject.style.display = "none";
  let btn =document.getElementById("add-project");
  btn.style.display = "inline";
  clearProjName();
}

function openForm(){
  let content = document.getElementById("pop-up-module");
  content.style.display = "flex";
}


function closeForm(){
   let content = document.getElementById("pop-up-module");
   content.style.display = "none";
   clearData();
}

// fix this
function submitForm(){
   addTask();
   //createToDoElement(todos);
   console.log(currentPage);
   closeForm();
}
function submitProject(){
  addProject();
  createProjectelement();
  closeProjectForm();
  clearProjName();
}

function addNavBarlisteners(){
  let projSubmitBtn = document.getElementById("project-submit");
  let projCancelBtn  = document.getElementById("project-cancel");
  let addProj = document.getElementById("add-project");
  let daily = document.getElementById("today");
  let goals = document.getElementById("goals");


  addProj.addEventListener('click', openProjectForm);
  projCancelBtn.addEventListener('click', closeProjectForm);
  projSubmitBtn.addEventListener('click', submitProject); 
  daily.addEventListener('click', changePage);
  goals.addEventListener('click', changePage);

}
function changePage(event){
  if (event.target.id == "today"){
    if(currentPage != todoList.projects.at(0)){
        currentPage =  todoList.projects.at(0);
        console.log(currentPage);
        document.getElementById("today").style.fontWeight = "normal";
        currentId = currentPage.id;
    }
  }
  else if(event.target.id == "goals"){
    if(currentPage != todoList.projects.at(1)){
       currentPage = todoList.projects.at(1);
       console.log(currentPage);
       document.getElementById("goals").style.fontWeight = "bold";
       displayTodoList();
       currentId = currentPage.id;
       console.log(currentId);
    }
  }

}
function clearProjName(){
  document.getElementById("project").value = "";
}

export {displayTodoList, addNavBarlisteners, currentId, addInitialListeners};
