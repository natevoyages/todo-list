import * as form from "./get-form-data";

function createToDo(){
    let title = form.getTitle();
    let description = form.getDescription();
    let priority = form.getPriority();
    let dueDate = form.getDueDate();
    let note = form.getNotes();
    let done = false;

    return {title, description, priority, dueDate, notes, done}
}

export default createToDo;