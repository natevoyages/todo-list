import { todoList } from "./todolist";
let currentPage = todoList.projects.at(0);
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
function addNavBarlisteners(){
  let projSubmitBtn = document.getElementById("project-submit");
  let projCancelBtn  = document.getElementById("project-cancel");
  let addProj = document.getElementById("add-project");
  let daily = document.getElementById("today");
  let goals = document.getElementById("goals");


  addProj.addEventListener('click', openProjectForm);
  projCancelBtn.addEventListener('click', closeProjectForm);
 // projSubmitBtn.addEventListener('click', submitProject); 
  daily.addEventListener('click', changePage);
  goals.addEventListener('click', changePage);

}
function changePage(event){
  if (event.target.id == "today"){
    if(currentPage != todoList.projects.at(0)){
        currentPage =  todoList.projects.at(0);
        console.log(currentPage);
        document.getElementById("today").style.fontWeight = "normal";
    }
  }
  else if(event.target.id == "goals"){
    if(currentPage != todoList.projects.at(1)){
       currentPage = todoList.projects.at(1);
       console.log(currentPage);
       document.getElementById("goals").style.fontWeight = "bold";
       displayTodoList();
    }
  }

}
function clearProjName(){
  document.getElementById("project").value = "";
}

export {displayTodoList, addNavBarlisteners};
