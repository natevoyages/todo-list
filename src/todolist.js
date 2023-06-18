import { createProject } from "./projects";


function createToDoList()
{
  let projects = [];
  projects.push(createProject("Today"));
  projects.push(createProject("Goals"));
  return { projects }
}


const todoList = createToDoList();


export {createToDoList, todoList }