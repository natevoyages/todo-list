import { todoList} from "./todolist";
import { findCurrentPage } from "./ui";

function createProjectelement(){
    let li = document.createElement("li");
    li.setAttribute("class", "project");
    let projInfo = todoList.projects.at(todoList.projects.length - 1);
    li.innerText = projInfo.name;
    li.setAttribute('data-value', projInfo.id);
    li.style.listStyle = "none";
    document.getElementById("projects").appendChild(li);
    console.log(projInfo);
}

function createToDoElement(){
    let div = document.createElement("div");
    div.setAttribute("class", "todo");
    let tasks = todoList.projects.at(findCurrentPage()).tasks;
    let task = tasks.at(tasks.length -1);
    console.log("task: " + task);
    div.setAttribute('data-value', task.id);

    let title =document.createElement("p");
    let description = document.createElement("p");
    let priority = document.createElement("p");
    let dueDate = document.createElement("p");
    let done = document.createElement("p");
    let editBtn = document.createElement("button");
    let doneBtn = document.createElement("button");
    let btnDiv = document.createElement("div");

    title.innerText = "Title: " +  task.title;
    description.innerText = "Descrip: " + task.description;
    priority.innerText = "Priority: " + task.priority;
    dueDate.innerText = "Date: " + task.dueDate;
    done.innerText = "Done:" + task.done;
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
    

    document.getElementById("todos").appendChild(div);
}
function changePageContent(page){
    let h2 = document.getElementById('content-header');
    h2.innerText = page.name; 
    deleteTodosDom();
    let div = document.createElement("div");
    div.setAttribute("id", "todos");
    document.getElementById("content").appendChild(div);

}
function deleteTodosDom(){
    document.getElementById("todos").remove();
}
/*
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
*/


export {createToDoElement, createProjectelement, changePageContent};