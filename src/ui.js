import { createToDoList } from "./todolist";
import { todoList, } from "./todolist";

function displayTodoList()
{
  console.log("Todo List");
  todoList.projects.forEach(proj => 
    console.log("name: " + proj.name + " tasks: " + proj.tasks))
}


export {displayTodoList };