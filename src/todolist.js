import { createProject } from "./projects";
import { createDefaultTask } from "./tasks";


function createToDoList(){
  let projects = [];
  projects.push(createProject("Today"));
  projects.push(createProject("Goals"));
  projects.push(createProject("Default"));

  return { projects }
}


const todoList = createToDoList();
todoList.projects[2].tasks.push(createDefaultTask("title", "description", "priority", "dueDate", "note", false));


export {todoList }