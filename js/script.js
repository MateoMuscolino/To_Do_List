const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){ // check if the user just added something
    if (inputBox.value === ''){ // if the user didn't add something
        alert("Please enter a task!");
    }
    else { // if the user just added something
        let li = document.createElement("li"); // create the li element and append it to the list
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10006;"; // add a cross icon
        li.appendChild(span); // append the cross icon to the li element
    }
    inputBox.value = ""; // clear the input box
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();