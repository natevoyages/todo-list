import { todoList} from "./todolist";
import { findCurrentPage, changePage, displayTodoList } from "./ui";
import { deleteTask, taskId } from "./tasks";
import { deleteProject } from "./projects";

function createProjectelement(){
    let li = document.createElement("li");
    li.setAttribute("class", "project");
    let projInfo = todoList.projects.at(todoList.projects.length - 1);
    li.innerText = projInfo.name;
    li.setAttribute('data-value', projInfo.id);
    li.style.listStyle = "none";
    document.getElementById("projects").appendChild(li);
    console.log(projInfo);
    let btnDiv = document.createElement("div");
    let doneBtn = document.createElement("img");
    doneBtn.src = "../dist/icons/delete.svg";
    btnDiv.appendChild(doneBtn);
    btnDiv.style.display = "none";
    btnDiv.style.height = "1rem";
    doneBtn.addEventListener('click', deleteProjectDom);

    li.appendChild(btnDiv);
    li.addEventListener('click',changePage);
    li.addEventListener('mouseover', () => btnDiv.style.display = "flex" );
    li.addEventListener('mouseleave', () => btnDiv.style.display = "none");
}

function closeFullTodo(){
    document.getElementById('todo-card-module').style.display = "none";
    document.querySelector('.title').textContent = "";
    document.querySelector('.description').textContent = "";
    document.querySelector('.priority').textContent = "";
    document.querySelector('.due-date').textContent = "";
    document.querySelector('.notes').textContent = "";
}
function displayFullTodo(index){
    document.getElementById('todo-card-module').style.display = "flex";
    let tasks = todoList.projects.at(findCurrentPage()).tasks;
    let task = tasks[index];
    document.querySelector('.title').textContent = task.title;
    document.querySelector('.description').textContent = task.description;
    document.querySelector('.priority').textContent = task.priority;
    document.querySelector('.due-date').textContent = task.dueDate;
    document.querySelector('.notes').textContent = task.note;
}

function createToDoElement(){
    let div = document.createElement("div");
    div.setAttribute("class", "todo");
    let tasks = todoList.projects.at(findCurrentPage()).tasks;
    let task = tasks.at(tasks.length -1);
    div.setAttribute('task-value', task.id);

    let title =document.createElement("p");
    let description = document.createElement("p");
    let priority = document.createElement("p");
    let dueDate = document.createElement("p");
    let done = document.createElement("p");
    let readBtn = document.createElement("img");
    let editBtn = document.createElement("img");
    let doneBtn = document.createElement("img");
    let btnDiv = document.createElement("div");

    title.innerText = "Title: " +  task.title;
    description.innerText = "Descrip: " + task.description;
    priority.innerText = "Priority: " + task.priority;
    dueDate.innerText = "Date: " + task.dueDate;
    done.innerText = "Done:" + task.done;
    readBtn.src = "../dist/icons/read.svg";
    editBtn.src = "../dist/icons/edit.svg";
    doneBtn.src = "../dist/icons/delete.svg";


    div.appendChild(title);
    div.appendChild(priority);
    div.appendChild(dueDate);

    doneBtn.addEventListener('click', deleteTaskDom)

    btnDiv.appendChild(readBtn);
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
    loadTodos();

}
function deleteTodosDom(){
    document.getElementById("todos").remove();
}
function deleteTaskDom(event){
    let value = event.target.parentNode.parentNode.getAttribute('task-value');
    document.querySelector(`[task-value ="${value}"]`).remove();
    deleteTask(value);
}
function deleteProjectDom(event){
    let value = event.target.parentNode.parentNode.getAttribute('data-value');
    document.querySelector(`[data-value ="${value}"]`).remove();
    deleteProject(value);
}

// new functions
function changeTaskValue(event){
    taskId = event.target.parentNode.parentNode.getAttribute('task-value');
    return taskId;
}
function openTodo(event){
    let tasks = todoList.projects.at(findCurrentPage()).tasks;
    let val = changeTaskValue(event);
    let index = tasks.findIndex((task => task.id == val));
    displayFullTodo(index);
}
function editTodo(event){
    let tasks = todoList.projects.at(findCurrentPage()).tasks;
    let val = changeTaskValue(event);
    tasks.findIndex((task => task.id == val));


}

function loadTodos(){
    let tasks = todoList.projects.at(findCurrentPage()).tasks;
    tasks.forEach(task => {
        
    
        let div = document.createElement("div");
        div.setAttribute("class", "todo");
        console.log("task: " + task);
        div.setAttribute('task-value', task.id);
    
        let title =document.createElement("p");
        let description = document.createElement("p");
        let priority = document.createElement("p");
        let dueDate = document.createElement("p");
        let done = document.createElement("p");
        let readBtn = document.createElement("img");
        let editBtn = document.createElement("img");
        let doneBtn = document.createElement("img");
        let btnDiv = document.createElement("div");
    
        title.innerText = "Title: " +  task.title;
        description.innerText = "Descrip: " + task.description;
        priority.innerText = "Priority: " + task.priority;
        dueDate.innerText = "Date: " + task.dueDate;
        done.innerText = "Done:" + task.done;
        readBtn.src = "../dist/icons/read.svg";
        editBtn.src = "../dist/icons/edit.svg";
        doneBtn.src = "../dist/icons/delete.svg";
    
    
        
        div.appendChild(title);
        div.appendChild(priority);
        div.appendChild(dueDate);

        readBtn.addEventListener('click', openTodo);
        doneBtn.addEventListener('click', deleteTaskDom)
    
        btnDiv.appendChild(readBtn);
        btnDiv.appendChild(editBtn);
        btnDiv.appendChild(doneBtn);
        div.appendChild(btnDiv);
        
    
        document.getElementById("todos").appendChild(div);
    });
}


export {createToDoElement, createProjectelement, changePageContent, loadTodos, deleteTaskDom, 
closeFullTodo};