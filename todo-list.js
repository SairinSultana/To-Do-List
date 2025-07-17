// let h1 = document.querySelector("h1");
// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// btn.addEventListener("click", function () {
//   let item = document.createElement("li");
//   item.innerText = inp.value;

//  let delBtn=document.createElement("button");
//  delBtn.innerText="delete";
//  delBtn.classList.add("delete");

//   item.appendChild(delBtn);
//   ul.appendChild(item);
//   inp.value = ""; //reseting the value to empty string.
// });


// let remvBtn = document.querySelectorAll(".delete");
// for (delBtn of  remvBtn){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// };




const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const ul = document.querySelector("ul");

// Function to add a task
function addTask(text) {
    const li = document.createElement("li");
    li.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    li.appendChild(delBtn);
    ul.appendChild(li);
}

// Add task button click
addBtn.addEventListener("click", () => {
    const value = input.value.trim(); //.trim() removes any extra spaces from the beginning and end.
    if (value === "") {
        alert("Please enter a task!");
        return;
    }
    addTask(value);
    input.value = ""; //This clears the input box so the user can type a new task easily.
});

// Add task on Enter key
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { //It lets users press Enter inside the input box to add a task — without clicking the "Add" button.
        addBtn.click();
    }
});

// Event delegation for delete & mark complete
ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) { //.target button tells us which HTML element that was  exactly clicked.
        e.target.parentElement.remove();
    } else if (e.target.tagName === "LI") { //So… Why is "LI" in capital letters? Because tagName always returns tag names in UPPERCASE — 
                                               // that's how the DOM API works.
        e.target.classList.toggle("completed");
    }
});

//dark mode
// document.getElementById("darkModeBtn").addEventListener("click", () => {
//   document.body.classList.toggle("dark");
// });


let button = document.querySelector("#darkModeBtn");
button.addEventListener("click", function(){
     document.body.classList.toggle("dark");
});

//both code are functioning well