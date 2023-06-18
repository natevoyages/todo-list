import { todoList } from "./todolist";
function createProject(name)
{
  const tasks = [];
  return {name, tasks};
}

function addProject(){
  todoList.projects.push(createProject(prompt()));

}
function deleteProject(){
  let input = prompt();
  let index = todoList.projects.findIndex(proj => proj.name == input);
  if(index != -1)
  {
  todoList.projects.splice(index, 1);
  }
}

export {createProject, addProject, deleteProject};