function setDone(obj){
    if (obj.done === false){
    obj.done = true;
    }
    else {
        obj.done = false;
    }
}
function setNote(obj, note){
    obj.note = note;
}

function setTitle(obj, title){
    obj.title = title;
}

function setDescription(obj, description){
    obj.description = description;
}

function setDueDate(obj, dueDate){
    obj.dueDate = dueDate;
}

function setPriority(obj, priority){
    obj.priority = priority;
}

export {setDone, setNote, setDescription, setTitle, setPriority,setDueDate};