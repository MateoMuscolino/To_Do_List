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
    }
}
