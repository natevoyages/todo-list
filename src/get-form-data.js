
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

export {getNotes, getTitle, getDescription, getDueDate, getPriority}
/*function getNote(obj, note){
    obj.note = note;
}

function getTitle(obj, title){
    obj.title = title;
}

function getDescription(obj, description){
    obj.description = description;
}

function getDueDate(obj, dueDate){
    obj.dueDate = dueDate;
}

function getPriority(){
    
    return priority;
}*/