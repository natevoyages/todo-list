
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

function getProjectName(){
    let name = document.getElementById("project").value;
    return name;
}


export {getNotes, getTitle, getDescription, getDueDate, getPriority, getProjectName}