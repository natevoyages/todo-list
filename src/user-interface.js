import { openForm, closeForm, submitForm} from "./form-control"
let i = 0;
function addInitialListeners(){
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

function addFormListeners(){
    let submitBtn = document.querySelector(".form-submit");
    let closebtn = document.querySelector(".form-close-btn");

    closebtn.addEventListener('click', (event) => {event.preventDefault();
    closeForm();});
    submitBtn.addEventListener('click', (event) => {event.preventDefault();
        submitForm();}); 
}

export {addInitialListeners};