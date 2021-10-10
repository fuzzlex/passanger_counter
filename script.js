let enterEl = document.getElementById("enter");
let previousEl = document.getElementById("previous")
let count = 0;
function plusEl() {
    count += 1;
    enterEl.innerText = count;    
}

function saveEl() {
    let countpl = count + " - "
    previousEl.textContent += countpl;    
}
function reset(){
    count = 0;
    enterEl.innerText = count; 
    previousEl.textContent = "Previous entries:"; 
}