import { openForm, closeForm, submitForm, submitProject, closeProjectForm, openProjectForm} from "./form-control"
import { currentPage, dailyTodos, monthlyTodos, weeklyTodos, projects } from "./todo-objects";

let i = 0;
function addInitialListeners(){
    addNavBarlisteners();
    let addTodoBtn = document.getElementById("add-todo")
    addTodoBtn.addEventListener('click', () =>{
         openForm();
         if (i== 0){
            i++;
         addFormListeners();
        }
    }
         );
}

function addNavBarlisteners(){
    let projSubmitBtn = document.getElementById("project-submit");
    let projCancelBtn  = document.getElementById("project-cancel");
    let addProj = document.getElementById("add-project");
    let daily = document.getElementById("daily");
    let weekly =document.getElementById("weekly");
    let monthly = document.getElementById("monthly");


    addProj.addEventListener('click', openProjectForm);
    projCancelBtn.addEventListener('click', closeProjectForm);
    projSubmitBtn.addEventListener('click', submitProject); 
    daily.addEventListener('click', changePage);
    weekly.addEventListener('click', changePage)
    monthly.addEventListener('click', changePage)

}

function addFormListeners(){
    let submitBtn = document.querySelector(".form-submit");
    let closebtn = document.querySelector(".form-close-btn");


    closebtn.addEventListener('click', (event) => {event.preventDefault();
    closeForm();});
    submitBtn.addEventListener('click', (event) => {event.preventDefault();
    submitForm(currentPage);}); 
    
}

function addNewTodoListers(){

}
function addProjectListner(){

}

function changePage(event){
    if (event.target.id == "daily"){
        currentPage = dailyTodos;
        console.log(currentPage);
        document.getElementById("daily").style.color = "white";

            console.log(currentPage === dailyTodos);
    }
    else if(event.target.id == "monthly"){
        currentPage = monthlyTodos;
        console.log(currentPage);
    }
    else if(event.target.id == "weekly"){
        currentPage = weeklyTodos;
        console.log(currentPage);
    }

    //fix this
}

export {addInitialListeners};