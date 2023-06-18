import { todoList } from "./todolist";

let id = 0;

function createProject(name){
  const tasks = [];
  id += 1;
  return {name, tasks, id};
}

function addProject(){
  todoList.projects.push(createProject(prompt()));

}

function deleteProject(){
  let input = prompt();
  let index = todoList.projects.findIndex(proj => proj.id == input);
  if(index != -1)
  {
  todoList.projects.splice(index, 1);
  }
}

function getProjectName(){
  let name = document.getElementById("project").value;
  return name;
}

function setProjectName(){
  let input = prompt();
  let index = todoList.projects.findIndex(proj => proj.id == input);
  todoList.projects[index] = prompt;
}

export {createProject, addProject, deleteProject };