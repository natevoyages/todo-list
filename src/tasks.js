import { todoList } from "./todolist";
import { currentId } from "./ui";
let id = 0;

function createTask(){
  let title = getTitle();
  let description = getDescription();
  let priority = getPriority();
  let dueDate = getDueDate();
  let note = getNotes();
  let done = false;
  id += 1;
  return {title, description, priority, dueDate, note, done, id}
}

function createDefaultTask(title, description, priority, dueDate, note, done = false){
  id += 1;
  return {title, description, priority, dueDate, note, done, id}
}

function addTask(){
  let projId = currentId;
  let index = todoList.projects.findIndex(proj => proj.id == projId);
  todoList.projects[index].tasks.push(createTask());

}
function deleteTask(){
  let input = prompt("prj name");
  let index = todoList.projects.findIndex(proj => proj.name == input);
  if(index != -1)
  {
  let taskI = prompt("task id");
  todoList.projects[index].tasks.splice(taskI, 1);
  }
}

function getNotes(){
  let notes = document.getElementById("notes").value;
  return notes;
}

function getTitle(){
   let title = document.getElementById("title").value;
   return title;
}

function getDescription(){
  let description = document.getElementById("description").value;
  return description;
}

function getDueDate(){
  let dueDate = document.getElementById("due-date").value;
  return dueDate;
}

function getPriority(){
  let priority = document.getElementById("priority").value;
  return priority;
}

function clearData(){
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("notes").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("priority").value = "Medium";
}
export {addTask, deleteTask,createDefaultTask, createTask, clearData};