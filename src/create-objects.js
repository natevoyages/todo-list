import * as form from "./get-form-data";
import { todos, projects} from "./todo-objects";
// fix this
function createToDo(todos){
    let title = form.getTitle();
    let description = form.getDescription();
    let priority = form.getPriority();
    let dueDate = form.getDueDate();
    let note = form.getNotes();
    let done = false;
    let index = todos.length;

    return {title, description, priority, dueDate, note, done, index}
}

function createProject(){
    let name = form.getProjectName();
    console.log(form.getProjectName());
    let todos = [];
    let index = projects.length;
    
    return {name, todos, index}
}

export {createToDo, createProject };