function createToDo(title, description, dueDate, priority, notes){
    let done = false;

    return {title, description, priority, dueDate, notes, done}
}

export default createToDo;