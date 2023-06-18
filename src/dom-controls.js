import { todoList} from "./todolist";

function createProjectelement(){
    let li = document.createElement("li");
    li.setAttribute("class", "project");
    let projInfo = todoList.projects.at(todoList.projects.length - 1);
    li.innerText = projInfo.name;
    li.style.listStyle = "none";
    document.getElementById("projects").appendChild(li);
    console.log(projInfo);
}
/*
//fix this
function createToDoElement(todos){
    let div = document.createElement("div");
    div.setAttribute("class", "todo");
    let objInfo = todos.at(todos.length - 1);
    div.value = objInfo.index; // fix this

    let title =document.createElement("p");
    let description = document.createElement("p");
    let priority = document.createElement("p");
    let dueDate = document.createElement("p");
    let done = document.createElement("p");
    let editBtn = document.createElement("button");
    let doneBtn = document.createElement("button");
    let btnDiv = document.createElement("div");

    title.innerText =  objInfo.title;
    description.innerText = objInfo.description;
    priority.innerText = "Priority: " + objInfo.priority;
    dueDate.innerText = "Date: " + objInfo.dueDate;
    done.innerText = "Done:" + objInfo.done;
    editBtn.innerText = "Edit";
    doneBtn.innerText = "Done?"


    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(priority);
    div.appendChild(dueDate);
    div.appendChild(done);

    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(doneBtn);
    div.appendChild(btnDiv);
    

    document.getElementById("content").appendChild(div);
}

function loadTodos(todos){
    todos.array.forEach(todo => {
        
    
    let div = document.createElement("div");
    div.setAttribute("class", "todo");
    let objInfo = todo;
    div.value = objInfo.index; // fix this

    let title =document.createElement("p");
    let description = document.createElement("p");
    let priority = document.createElement("p");
    let dueDate = document.createElement("p");
    let done = document.createElement("p");
    let editBtn = document.createElement("button");
    let doneBtn = document.createElement("button");
    let btnDiv = document.createElement("div");

    title.innerText =  objInfo.title;
    description.innerText = objInfo.description;
    priority.innerText = "Priority: " + objInfo.priority;
    dueDate.innerText = "Date: " + objInfo.dueDate;
    done.innerText = "Done:" + objInfo.done;
    editBtn.innerText = "Edit";
    doneBtn.innerText = "Done?"


    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(priority);
    div.appendChild(dueDate);
    div.appendChild(done);

    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(doneBtn);
    div.appendChild(btnDiv);
    

    document.getElementById("content").appendChild(div);
    });
}

function clearData(){
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("notes").value = "";
    document.getElementById("due-date").value = "";
    document.getElementById("priority").value = "Medium";
}

function clearProjName(){
    document.getElementById("project").value = "";
}

//fix this
function changeTodo(event){

    if (event);
}
*/
export {/*createToDoElement, clearData,*/ createProjectelement, /*clearProjName*/};