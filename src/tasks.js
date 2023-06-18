import { todoList } from "./todolist";
let id = 0;
function createTask(title, description, priority, dueDate, note, done)
{
  id += 1;
  return {title, description, priority, dueDate, note, done, id}
}


function addTask(){
  let name = prompt("add task");
  let index = todoList.projects.findIndex(proj => proj.name == name);
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

export {addTask, deleteTask};